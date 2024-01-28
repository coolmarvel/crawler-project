import { getArticles } from "@/pages/api/article/get-articles";
import ArticleItem from "../common/article-item";

export default async function ArticleList() {
  const { articles } = await getArticles();

  return <div className="px-4">{articles && articles.map((article, index) => <ArticleItem key={index} article={article} />)}</div>;
}
