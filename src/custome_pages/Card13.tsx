import { timeStamp } from "console";
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
export interface Card13Props {
  className?: string;
  data?: DataTypeCard;
}

const Card13: FC<Card13Props> = ({
  className = "",
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
      className={`nc-Card13 relative flex jutify-between mb-10 ${className}`}
      data-nc-id="Card13"
    >
      <div className="flex flex-col h-full py-2">
        <h2 className={`nc-card-title block font-semibold text-base`}>
          <Link
            to={`/informasi-detail/${data.slug}`}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            {data.title}
          </Link>
        </h2>
        <span className="block my-3 text-neutral-500 dark:text-neutral-400 ">
          <span className="line-clamp-2">
            <div dangerouslySetInnerHTML={{ __html: data.content || "" }} />
          </span>
        </span>
        <span className="mt-4 block sm:hidden text-sm text-neutral-500 ">
          {data.timestamp}
        </span>
        <div className="mt-auto block">
          <PostCardMeta fullName={data.user} timestamp={data.timestamp} />
        </div>
      </div>

      <Link
        to={"/blog-single"}
        className={`block relative h-40 flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
      >
        <NcImage
          src={`${process.env.REACT_APP_DATA_PROVIDER}/${data.image}`}
          containerClassName="absolute inset-0 "
          className="object-cover w-full h-40 rounded-xl sm:rounded-3xl"
        />
      </Link>
    </div>
  );
};

export default Card13;
