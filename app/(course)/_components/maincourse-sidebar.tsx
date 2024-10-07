import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { getProgress } from "@/actions/get-progress";
import { CourseSidebar } from "./course-sidebar";


const MaincourseSidebar = async ({
  params
}: {
  params: { courseId: string; }
}) => {

    const { userId } = auth();

    if (!userId) {
      return redirect("/");
    };
  

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
            },
          },
        },
      });
    

  if (!course) {
    return redirect("/");
  }

  const progressCount: number = await getProgress(userId, course.id);

  return (

    <div className="h-full">
      {/* <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar
          course={course}
          progressCount={progressCount}
          currentProfile={safeProfile}
        />
      </div> */}
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar
          course={course}
          progressCount={progressCount}
        />
      </div>
    </div>

  )
}
 
export default MaincourseSidebar;