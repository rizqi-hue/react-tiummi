import { FC, useEffect, useState } from "react";
import { ButtonCircle, ButtonPrimary, ButtonSecondary, HeaderLogged, Input, NcImage } from "../../custome_components";
import api, { api_url } from "../../services/axios";
import NcModal from "./NcModal";
import file from "./file.png"
import moment from 'moment'
import { Card } from "@mui/material";

export interface PageMateriProps {
  className?: string;
}

const plans = [
  {
    name: "Metamask",
    img: '',
  },
  {
    name: "Walletconnect",
    img: '',
  },
  {
    name: "Walletlink",
    img: '',
  },
  {
    name: "Fortmatic",
    img: '',
  },
];

interface MateriProps {
  id: number;
  nama: string;
  nama_dosen: string;
  matakul: string;
  berkas: string;
  nidn: number;
  kode: string;
  tgl: string; 
  ket: string;
}

const PageMateri: FC<PageMateriProps> = ({ className = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [download, setDownload] = useState('');
  const [perPage, setPerPage] = useState(5)
  const [total, setTotal] = useState(0)
  const [cari, setCari] = useState('')
  const [modalData, setModalData] = useState({id : 0, nama: '', berkas: '', nama_dosen: '', tgl: "", matakul: ""});

  useEffect(() => {
    api
      .get("api_admin/materi/select", {
        params: {
          pagination: `{"page":1,"perPage":${perPage}}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
        setTotal(res.data.total);
      });
  }, []);

  const doDownload = () => {
    api_url.interceptors.request.use(
      function (config: any) {
        config.headers["Content-Type"] = `application/octet-stream`;
        config.headers["Content-Type"] = `attachment"`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    api_url
      .get("api_admin/materi/download/" + modalData?.id).then((res) => {
        setDownload(res.data.message);
      });
  }

  const doCari = () => {
    api
      .get("api_admin/materi/select", {
        params: {
          pagination: `{"page":1,"perPage":${perPage}}`,
          filter: `{"q":"${cari}"}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
        setTotal(res.data.total);
      });
  }

  const more = () => {
    let nomor = perPage + 3 ;
    if (nomor > total) {
      setPerPage(total)
    } else {
      setPerPage(nomor)
    }

    api
      .get("api_admin/materi/select", {
        params: {
          pagination: `{"page":1,"perPage":${nomor}}`,
          filter: `{"q":"${cari}"}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
        setTotal(res.data.total);
      });
  }

  const less = () => {
    let nomor = perPage - 3;

    if (nomor >= 5) {
      setPerPage(nomor)
      api
        .get("api_admin/materi/select", {
          params: {
            pagination: `{"page":1,"perPage":${nomor}}`,
            filter: `{"q":"${cari}"}`,
          },
        })
        .then((res) => {
          setData(res.data.data);
          setTotal(res.data.total);
        });
    }
  }

  const modalClick = (materi:MateriProps) => {
    setShowModal(true)
    setModalData(materi)
    setDownload('')
  }

  const renderContent = () => {
    return (
      <div>
        <div className="align-center">
        <Card sx={{ display: "inline-block" }}>
          <embed type="application/pdf" src={`${process.env.REACT_APP_DATA_PROVIDER}/${modalData?.berkas}`} width="600" height="300"></embed>
        </Card>
        </div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
         {modalData?.nama} <br />
         <span className="text-md">{modalData?.matakul}</span>
        </h3>
        <span className="text-sm">
          Di unggah oleh : {modalData?.nama_dosen} <br />
        </span>
        <span className="text-sm">
          Tanggal : { moment(modalData?.tgl).format('LL') } <br />
        </span>
        {/* <div className="mt-5 space-x-3">
          <ButtonPrimary onClick={() => doDownload()} type="button">Unduh Dokemen</ButtonPrimary>
          <span className="text-red-500  ml-10"> {download}</span>
        </div> */}
      </div>
    );
  };

  return (
    <>
      <HeaderLogged />

      <div
        className={`nc-PageConnectWallet ${className}`}
        data-nc-id="PageConnectWallet"
      >
      
        <div className="container">
          <div className="my-12 sm:lg:my-16 lg:my-24 max-w-3xl mx-auto space-y-8 sm:space-y-10">
            {/* HEADING */}
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Materi
              </h2>
              <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
                {/* Connect with one of our available wallet providers or create a new
                one. */}
              </span>
            </div>
            {/* <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div> */}
            <div className="">
              <header className="flex flex-col lg:-mt-7">
                <div className="relative w-full ">
                  <label
                    htmlFor="search-input"
                    className="text-neutral-500 dark:text-neutral-300"
                  >
                    <span className="sr-only">Search all icons</span>
                    <Input
                      className="shadow-lg border-0 dark:border"
                      id="search-input"
                      type="search"
                      placeholder="Cari materi"
                      sizeClass="pl-14 py-5 pr-5 md:pl-16"
                      rounded="rounded-full"
                      onChange={(e) => setCari(e.target.value)}
                    />
                    <ButtonCircle
                      className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
                      size=" w-11 h-11"
                      type="button"
                      onClick={() => doCari()}
                    >
                      <i className="las la-arrow-right text-xl"></i>
                    </ButtonCircle>
                    <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 22L20 20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </header>
            </div>
            <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
              <div className="space-y-3">
                {data.map((materi:MateriProps, index) => (
                  <div
                    key={materi.id}
                    onClick={() => modalClick(materi)}
                    typeof="button"
                    tabIndex={0}
                    className="relative rounded-xl hover:shadow-lg hover:bg-neutral-50 border 
                  border-neutral-200 dark:border-neutral-700 px-3 sm:px-5 py-4 cursor-pointer flex 
                  focus:outline-none focus:shadow-outline-blue focus:border-blue-500 dark:bg-neutral-800 
                  dark:text-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center w-full">
                        <NcImage
                          src={file}
                          containerClassName="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 p-2 sm:p-3 bg-white rounded-full overflow-hidden shadow-lg"
                        />
                        <div
                          className={`ml-4 sm:ml-8`}
                        >
                          <span className="font-semibold text-xl md:text-2xl">{materi.nama}</span>
                          <div
                            className={`text-md md:text-xl`}
                          >
                            {materi.matakul}
                          </div>
                        </div>
                      </div>
                      <div>
                        {index + 1}
                      </div>
                     
                    </div>
                  </div>
                ))}
              </div>

              {/* ---- */}
              <div className="pt-2 w-full flex justify-between items-center">
                <div>
                  {
                    total == perPage ?
                    (
                      <ButtonPrimary type="button" disabled className="flex-1 mr-5">
                        <span className="">Show More</span>
                      </ButtonPrimary>
                    )
                    : 
                    (
                      <ButtonPrimary type="button" onClick={() => more()} className="flex-1 mr-5">
                        <span className="">Show More</span>
                      </ButtonPrimary>
                    )
                  }
                  <ButtonSecondary type="button" onClick={() => less()}  className="flex-1">
                    <span className="">Show less</span>
                  </ButtonSecondary>
                </div>
                <div>
                  {
                    cari !== '' && 'Hasil dari : ' + cari
                  }
                </div>
                <div>
                  Tampil {perPage} dari {total}
                </div>
              </div>
            </div>
          </div>
        </div>

        <NcModal
          renderTrigger={() => null}
          isOpenProp={showModal}
          renderContent={renderContent}
          contentExtraClass="max-w-2xl h-full"
          onCloseModal={() => setShowModal(false)}
          modalTitle="Materi"
          materi={modalData}
        />
      </div>
    </>
  );
};

export default PageMateri;
