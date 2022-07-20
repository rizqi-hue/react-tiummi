import { Admin, CustomRoutes, Resource } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "./i18n/en";

import { Layout, Login } from "./components/layouts";
import { Dashboard } from "./components/pages/dashboard";
import { lightTheme } from "./components/layouts/themes";

// pages
import visitors from "./components/pages/visitors";
import user from "./components/pages/user";
import mahasiswa from "./components/pages/mahasiswa";
import dosen from "./components/pages/dosen";
import kelas from "./components/pages/kelas";
import jurusan from "./components/pages/jurusan";
import tempatikelas from "./components/pages/tempatikelas";
import soal from "./components/pages/soal";
import asisten from "./components/pages/asisten";
import matakul from "./components/pages/matakul";
import inventori from "./components/pages/inventori";
import peminjaman from "./components/pages/peminjaman";
import peminjamanmahasiswa from "./components/pages/peminjamanmahasiswa";
import materi from "./components/pages/materi";
import materimahasiswa from "./components/pages/materimahasiswa";
import profile from "./components/pages/profile";
import profilemahasiswa from "./components/pages/profile_mahasiswa";
import pengajuan from "./components/pages/pengajuan";
import ruangan from "./components/pages/ruangan";
import pinjamruangan from "./components/pages/pinjamruangan";
import pinjamruanganmahasiswa from "./components/pages/pinjamruanganmahasiswa";
import jadwal from "./components/pages/jadwal";
import survei from "./components/pages/survei";
import maintenance from "./components/pages/Maintenance";
import hasilsurvei from "./components/pages/hasilsurvei";
import lihatjadwal from "./components/pages/lihatjadwal";

//provider
import dataProvider from "./services/dataProvider/dataProvider";
import authProvider from "./services/authProvider";
import { Route } from "react-router";
import InventoriCetak from "./components/pages/inventori/InventoriCetak";

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
        {permissions ? (
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
              <Resource name="maintenance" {...maintenance} />
              <Resource name="materi" {...materi} />
              <Resource name="profile" {...profile} />
              <Resource name="inventoripengajuan" {...pengajuan} />
              <Resource name="pinjamruangan" {...pinjamruangan} />
              <Resource name="jadwal" {...jadwal} />
              <Resource name="survei" {...survei} />
              <Resource name="hasilsurvei" {...hasilsurvei} />
              <Resource name="lihatjadwal" {...lihatjadwal} />
            </>
          ) : null
        ) : null}

        {permissions ? (
          permissions.includes("mahasiswa") ? (
            <>
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
