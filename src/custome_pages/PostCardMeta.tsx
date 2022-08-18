import React, { FC } from "react";
import { Link } from "react-router-dom";
// import { _getPersonNameRd } from "contains/fakeData";
import { Avatar } from "../custome_components";

export interface PostCardMetaProps {
  className?: string;
  hiddenAvatar?: boolean;
  fullName?: string;
  timestamp?: string;
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none",
  hiddenAvatar = false,
  fullName = "",
  timestamp = "",
}) => {
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm ${className}`}
      data-nc-id="PostCardMeta"
    >
      <Link
        to={"#"}
        className="flex-shrink-0 relative flex items-center space-x-2"
      >
        {!hiddenAvatar && (
          <Avatar radius="rounded-full" sizeClass={"h-7 w-7 text-sm"} />
        )}
        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {/* {fullName} */}
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
          {timestamp}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
