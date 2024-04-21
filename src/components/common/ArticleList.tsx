import React from "react";
import ArticleTitle from "./ArticleTitle";

type Article = {
	title: string;
	source: string;
	category: string;
	date: string;
	id: string;
	link: string;
};

type ArticleProps = {
	article: Article;
};

const ArticleItem = ({ article }: ArticleProps) => {
	return (
		<li key={article.id} className="mb-4 border-b py-3">
			<h3 className="text-lg font-bold">{article.title}</h3>
			<p className="text-sm text-gray-600">
				{article.category && (
					<>
						Category:<strong> {article.category}</strong> |
					</>
				)}{" "}
				{article.source && (
					<>
						Source: <strong>{article.source}</strong> |
					</>
				)}{" "}
				{article.date && (
					<>
						Date: <strong>{new Date(article.date).toLocaleDateString()}</strong>{" "}
						|
					</>
				)}{" "}
				{article.link && (
					<>
						<a
							className="text-blue-500 italic font-semibold"
							rel="noreferrer"
							target="_blank"
							href={article.link}
						>
							view story
						</a>
					</>
				)}
			</p>
		</li>
	);
};

type ArticleListProps = {
	title: string;
	articles: Article[];
	loading: boolean;
};

const ArticleList = ({ title, articles, loading }: ArticleListProps) => {
	return (
		<div className="flex-1 p-4">
			<ArticleTitle title={title} />
			<ul>
				{loading
					? "Loading ..."
					: articles.length === 0
					? "No News available"
					: articles.map((article) => (
							<ArticleItem key={article.id} article={article} />
					  ))}
			</ul>
		</div>
	);
};

export default ArticleList;
