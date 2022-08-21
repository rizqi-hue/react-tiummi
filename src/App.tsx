import polyglotI18nProvider from "ra-i18n-polyglot";
import { Admin, CustomRoutes, Resource } from "react-admin";
import englishMessages from "./i18n/en";

import { Layout, Login } from "./components/layouts";
import { lightTheme } from "./components/layouts/themes";
import { Dashboard } from "./components/pages/dashboard";

// pages
import asisten from "./components/pages/asisten";
import dosen from "./components/pages/dosen";
import hasilsurvei from "./components/pages/hasilsurvei";
import inventori from "./components/pages/inventori";
import jadwal from "./components/pages/jadwal";
import jurusan from "./components/pages/jurusan";
import kelas from "./components/pages/kelas";
import lihatjadwal from "./components/pages/lihatjadwal";
import mahasiswa from "./components/pages/mahasiswa";
import maintenance from "./components/pages/Maintenance";
import matakul from "./components/pages/matakul";
import materi from "./components/pages/materi";
import materimahasiswa from "./components/pages/materimahasiswa";
import materidosen from "./components/pages/materidosen";
import peminjaman from "./components/pages/peminjaman";
import peminjamanmahasiswa from "./components/pages/peminjamanmahasiswa";
import pengajuan from "./components/pages/pengajuan";
import pinjamruangan from "./components/pages/pinjamruangan";
import profile from "./components/pages/profile";
import profilemahasiswa from "./components/pages/profile_mahasiswa";
import ruangan from "./components/pages/ruangan";
import soal from "./components/pages/soal";
import survei from "./components/pages/survei";
import tempatikelas from "./components/pages/tempatikelas";
import user from "./components/pages/user";
import visitors from "./components/pages/visitors";
import chat from "./components/pages/chat";
import news from "./components/pages/informasi";

//provider
import authProvider from "./services/authProvider";
import dataProvider from "./services/dataProvider/dataProvider";
import { Route } from "react-router";
import { LandingPage } from "./custome_pages/LandindPage";
import About from "./custome_pages/About";
import Informasi from "./custome_pages/Informasi";
import InformasiSingle from "./custome_pages/InformasiSingle";

const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === "fr") {
    return import("./i18n/fr").then((messages) => messages.default);
  }
  return englishMessages;
}, "en");

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    //
    title=""
    dashboard={Dashboard}
    loginPage={Login}
    layout={Layout}
    theme={lightTheme}
    i18nProvider={i18nProvider}
    disableTelemetry
  >
    {(permissions): any => (
      <>
        <CustomRoutes noLayout>
          <Route path="/" element={<LandingPage />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/informasi-detail/:slug" element={<InformasiSingle />} />
          <Route path="/about" element={<About />} />
        </CustomRoutes>

        {permissions ? (
          permissions.includes("superadmin") ? (
            <>
              <Resource name="dashboard" list={Dashboard} />
              <Resource name="customers" {...visitors} />
              <Resource name="users" {...user} />
              <Resource name="mahasiswa" {...mahasiswa} />
              <Resource name="dosen" {...dosen} />
              <Resource name="kelas" {...kelas} />
              <Resource name="ruangan" {...ruangan} />
              <Resource name="jurusan" {...jurusan} />
              <Resource name="tempatikelas" {...tempatikelas} />
              <Resource name="soal" {...soal} />
              <Resource name="asisten" {...asisten} />
              <Resource name="matakul" {...matakul} />
              <Resource name="inventori" {...inventori} />
              <Resource name="peminjaman" {...peminjaman} />
              <Resource name="maintenance" {...maintenance} />
              <Resource name="materi" {...materi} />
              <Resource name="profile" {...profile} />
              <Resource name="inventoripengajuan" {...pengajuan} />
              <Resource name="pinjamruangan" {...pinjamruangan} />
              <Resource name="jadwal" {...jadwal} />
              <Resource name="survei" {...survei} />
              <Resource name="hasilsurvei" {...hasilsurvei} />
              <Resource name="lihatjadwal" {...lihatjadwal} />
              <Resource name="chat" {...chat} />
              <Resource name="news" {...news} />
            </>
          ) : null
        ) : null}

        {permissions ? (
          permissions.includes("mahasiswa") ? (
            <>
              <Resource name="dashboard" list={Dashboard} />
              <Resource name="profile" {...profilemahasiswa} />
              <Resource name="survei" {...survei} />
              <Resource name="lihatjadwal" {...lihatjadwal} />
              <Resource name="peminjaman" {...peminjamanmahasiswa} />
              <Resource name="materi" {...materimahasiswa} />

              {/* <Resource name="pinjamruangan" {...pinjamruanganmahasiswa} /> */}

              {/* <Resource name="peminjaman" {...peminjaman} /> */}
              {/* <Resource name="pinjamruangan" {...pinjamruangan} /> */}
            </>
          ) : null
        ) : null}


        {permissions ? (
          permissions.includes("dosen") ? (
            <>
              <Resource name="dashboard" list={Dashboard} />
              <Resource name="lihatjadwal" {...lihatjadwal} />
              <Resource name="materi" {...materidosen} />

            </>
          ) : null
        ) : null}
      </>
    )}

    {/* {permissions ? (
      permissions.includes("superadmin") ? (
        <>
          <Resource name="customers" {...visitors} />
          <Resource name="users" {...user} />
          <Resource name="mahasiswa" {...mahasiswa} />
          <Resource name="dosen" {...dosen} />
          <Resource name="kelas" {...kelas} />
          <Resource name="ruangan" {...ruangan} />
          <Resource name="jurusan" {...jurusan} />
          <Resource name="tempatikelas" {...tempatikelas} />
          <Resource name="soal" {...soal} />
          <Resource name="asisten" {...asisten} />
          <Resource name="matakul" {...matakul} />
          <Resource name="inventori" {...inventori} />
          <Resource name="peminjaman" {...peminjaman} />
          <Resource name="materi" {...materi} />
          <Resource name="profile" {...profile} />
          <Resource name="inventoripengajuan" {...pengajuan} />
          <Resource name="pinjamruangan" {...pinjamruangan} />
          <Resource name="jadwal" {...jadwal} />
        </>
      ) : (
        ""
      )
    ) : (
      ""
    )} */}

    {/* <CustomRoutes>
      <Route path="/inventori/print/:id" element={<InventoriCetak />} />
    </CustomRoutes> */}
  </Admin>
);

export default App;
