import Image from "next/image";
import { getAllBlogs } from "@/lib/getAllBlog";

const Blogs = async () => {
  const data = await getAllBlogs();
  console.log(data);
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-5xl text-center mb-10">All Blogs</h1>
      {data &&
        data.map((el) => (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {data &&
              data.map((el) => (
                <div key={el.id} className="bg-white p-4 shadow-md">
                  <img
                    src={el.ImageUrl}
                    className="w-full h-48 object-cover"
                    alt=""
                  />
                  <div className="mt-4">
                    <h1 className="text-xl font-bold">{el.title}</h1>
                    <p className="text-gray-600">{el.Description}</p>
                  </div>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Blogs;
