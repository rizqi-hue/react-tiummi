import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NcImage } from "../custome_components";
import PostCardMeta from "./PostCardMeta";

interface DataTypeCard {
  title?: string;
  slug?: string;
  content?: string;
  image?: string;
  kategori?: string;
  type?: string;
  timestamp?: string;
  user?: string;
  [key: string]: any;
}

export interface Card12Props {
  className?: string;
  data?: DataTypeCard;
}

const Card12: FC<Card12Props> = ({
  className = "h-full",
  data = {
    title: "",
    slug: "",
    content: "",
    timestamp: "",
    user: "",
    image: "",
  },
}) => {
  return (
    <div
      className={`nc-Card12 group relative flex flex-col ${className}`}
      data-nc-id="Card12"
    >
      <Link
        to={`/informasi-detail/${data.slug}`}
        className="block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
      >
        <NcImage
          src={`${process.env.REACT_APP_DATA_PROVIDER}/${data.image}`}
          containerClassName="absolute inset-0"
          alt={"title"}
        />
      </Link>

      <div className=" mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Link
            to={`/informasi-detail/${data.slug}`}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            {data.title}
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2">
            <div dangerouslySetInnerHTML={{ __html: data.content || "" }} />
          </span>
        </span>
        <PostCardMeta
          className="mt-5"
        
          timestamp={data.timestamp}
        />
      </div>
    </div>
  );
};

export default Card12;
