import Tag from "./Tag";

type ArticleProps = {
  title: string;
  link: string;
  source: string;
  tags: string[];
  completed: boolean;
};

function ArticleSingle({ title, link, source, tags, completed }: ArticleProps) {
  console.log(title, link, source, tags, completed);
  return (
    <div className="bg-gray-800 flex gap-3 rounded-lg my-2 py-4 max-w-md">
      <div className="ml-4 flex-3">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <div>
            {tags.map((tag: string) => (
              <Tag tag={tag} key={Math.random()} />
            ))}
          </div>
        </div>
      </div>
      <div className="mr-4 flex-1 ">
        <div>
          <p>{source}</p>
        </div>
        <div>
          <p>{completed}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticleSingle;
