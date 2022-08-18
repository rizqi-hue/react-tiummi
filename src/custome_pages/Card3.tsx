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

export interface Card3Props {
  className?: string;
  data?: DataTypeCard;
}

const Card3: FC<Card3Props> = ({
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
      className={`nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group ${className}`}
      data-nc-id="Card3"
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-5 mb-4">
          <div>
            <h2
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 text-xl`}
            >
              <Link
                to={`/informasi-detail/${data.slug}`}
                className="line-clamp-2 capitalize"
                title={"title"}
              >
                {data.title}
              </Link>
            </h2>
            <div className="block sm:mt-2">
              <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                <div dangerouslySetInnerHTML={{ __html: data.content || "" }} />
              </span>
            </div>
          </div>
          <PostCardMeta fullName={data.user} timestamp={data.timestamp} />
        </div>
      </div>

      <div
        className={`block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0`}
      >
        <Link
          to={"/blog-single"}
          className={`block w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 `}
        >
          <NcImage
            src={`${process.env.REACT_APP_DATA_PROVIDER}/${data.image}`}
            containerClassName="absolute inset-0"
          />
        </Link>
      </div>
    </div>
  );
};

export default Card3;
