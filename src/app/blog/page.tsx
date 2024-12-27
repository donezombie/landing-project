import { Container } from "@/components/Container";
import { blogData } from "@/customize/data";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="component:Blogs">
      <Container className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {blogData.map((el) => {
          return (
            <a href={el.link} className="flex" key={el.link}>
              <div className="blog shadow-md p-2 rounded-md hover:cursor-pointer hover:scale-105 transition-all">
                <img alt={el.header} src={el.img} />
                <h3 className="text-2xl mt-5">{el.header}</h3>
              </div>
            </a>
          );
        })}
      </Container>
    </div>
  );
};

export default Blogs;
