import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, HeaderLogged, NcImage } from "../custome_components";
import { useParams } from "react-router-dom";
import api from "../services/axios";

const InformasiSingle = () => {
  let { slug } = useParams();

  let [data, setData] = useState({
    id: "",
    slug: "",
    content: "",
    title: "",
    image: "",
    timestamp: "",
    user: "",
  });

  useEffect(() => {
    console.log(slug);

    api.get("api_admin/informasi/show_slug/" + slug).then((res) => {
      setData(res.data.data);
    });
  }, []);

  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            {data.title}
          </h1>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
              <Avatar
                containerClassName="flex-shrink-0"
                sizeClass="w-8 h-8 sm:h-11 sm:w-11 "
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <a
                    className="block font-semibold"
                    href="/ncmaz/author/the-demo-author-slug"
                  >
                    {data.user}
                  </a>
                </div>
                <div className="text-xs mt-[6px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {data.timestamp}
                  </span>
                  <span className="mx-2 font-semibold">·</span>
                  {/* <span className="text-neutral-700 dark:text-neutral-300">
                    6 min read
                  </span> */}
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-1.5 sm:ml-3">
              {/* <SocialsList /> */}
            </div>
          </div>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert"
      >
        <div dangerouslySetInnerHTML={{ __html: data.content || "" }} />
      </div>
    );
  };

  const renderTags = () => {
    return (
      <div className="max-w-screen-md mx-auto flex flex-wrap">
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Garden
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Jewelry
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Tools
        </a>
      </div>
    );
  };

  const renderAuthor = () => {
    return (
      <div className="max-w-screen-md mx-auto ">
        <div className="nc-SingleAuthor flex">
          <Avatar sizeClass="w-11 h-11 md:w-24 md:h-24" />
          <div className="flex flex-col ml-3 max-w-lg sm:ml-5 space-y-1">
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
              WRITEN BY
            </span>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              <a href="/ncmaz/author/the-demo-author-slug">Fones Mimi</a>
            </h2>
            <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
              There’s no stopping the tech giant. Apple now opens its 100th
              store in China.There’s no stopping the tech giant.
              <a
                className="text-primary-6000 font-medium ml-1"
                href="/ncmaz/author/the-demo-author-slug"
              >
                Readmore
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderPostRelated = (_: any, index: number) => {
    return (
      <div
        key={index}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link to={"/blog-single"} />
        <NcImage
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          src={""}
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">Judul</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              Nama
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">May 20, 2021</span>
          </div>
        </div>
        <Link to={"/blog-single"} />
      </div>
    );
  };

  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <HeaderLogged />
      <div className="nc-PageSingle pt-8 lg:pt-16 ">
        {renderHeader()}
        <NcImage
          className="w-full rounded-xl"
          containerClassName="container my-10 sm:my-12 "
          src={`${process.env.REACT_APP_DATA_PROVIDER}/${data.image}`}
        />

        <div className="nc-SingleContent container space-y-10 mb-20">
          {renderContent()}
          <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
        </div>
        {/* <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">
        <div className="container ">
          <h2 className="text-3xl font-semibold">Related posts</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {[1, 1, 1, 1].filter((_, i) => i < 4).map(renderPostRelated)}
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default InformasiSingle;
