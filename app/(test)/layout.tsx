import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { getProgress } from "@/actions/get-progress";

import getSafeProfile from "@/actions/get-safe-profile";
import { CourseNavbar } from "../(course)/_components/course-navbar";
import { CourseSidebar } from "./_components/course-sidebar";
// import { CourseNavbar } from "./_components/course-navbar";
// import { CourseSidebar } from "./_components/course-sidebar";

const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/")
  }
  const safeProfile = await getSafeProfile();
  if (!safeProfile) {
    return redirect("/");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            }
          }
        },
        orderBy: {
          position: "asc"
        }
      },
    },
  });

  if (!course) {
    return redirect("/");
  }

  // @ts-ignore
  const progressCount: number = await getProgress(userId, course.id);
  // const progressCount = await getProgress(userId, course.id);
  
  return (

    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar
          course={course}
          progressCount={progressCount}
          currentProfile={safeProfile}
        />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
        />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">
        {children}
      </main>
    </div>

  )
}


export default CourseLayout







// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//       <div className="w-full flex-none md:w-64">
//         {/* <CourseSidebar/> */}
//         <h1>owo</h1>
//       </div>
//       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//     </div>
//   );
// }