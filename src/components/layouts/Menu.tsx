import Box from "@mui/material/Box";
import { useState } from "react";

import {
  MenuItemLink,
  MenuProps,
  usePermissions,
  useSidebarState,
} from "react-admin";

import {
  Adjust,
  BarChart,
  Book,
  CalendarMonth,
  Chat,
  DashboardOutlined,
  DriveFileMove,
  Inventory,
  Info,
} from "@mui/icons-material";
import SubMenu from "./SubMenu";

type MenuName =
  | "menuCatalog"
  | "menuSales"
  | "menuJadwal"
  | "menuInventori"
  | "menuHome"
  | "menuInformasi";

const Menu = ({ dense = false }: MenuProps) => {
  const [state, setState] = useState({
    menuCatalog: false,
    menuSales: false,
    menuJadwal: false,
    menuInventori: false,
    menuHome: true,
    menuInformasi: false,
  });
  const [open] = useSidebarState();
  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };
  const { permissions } = usePermissions();

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      {permissions ? (
        permissions.includes("superadmin") ? (
          <>
            <SubMenu
              handleToggle={() => handleToggle("menuHome")}
              isOpen={state.menuHome}
              name="pos.menu.home"
              icon={<DashboardOutlined />}
              dense={dense}
            >
              <MenuItemLink
                to="/dashboard"
                state={{ _scrollToTop: true }}
                primaryText={"Dashboard"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/profile"
                state={{ _scrollToTop: true }}
                primaryText={"Profile"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <SubMenu
              handleToggle={() => handleToggle("menuInformasi")}
              isOpen={state.menuHome}
              name="pos.menu.informasi"
              icon={<Info />}
              dense={dense}
            >
              <MenuItemLink
                to="/news"
                state={{ _scrollToTop: true }}
                primaryText={"Informasi"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <SubMenu
              handleToggle={() => handleToggle("menuCatalog")}
              isOpen={state.menuCatalog}
              name="pos.menu.bankdata"
              icon={<DriveFileMove />}
              dense={dense}
            >
              <MenuItemLink
                to="/users"
                state={{ _scrollToTop: true }}
                primaryText={"Pengguna"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/mahasiswa"
                state={{ _scrollToTop: true }}
                primaryText={"Mahasiswa"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/dosen"
                state={{ _scrollToTop: true }}
                primaryText={"Dosen"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/kelas"
                state={{ _scrollToTop: true }}
                primaryText={"Kelas"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/ruangan"
                state={{ _scrollToTop: true }}
                primaryText={"Ruangan"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/jurusan"
                state={{ _scrollToTop: true }}
                primaryText={"Jurusan"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/tempatikelas"
                state={{ _scrollToTop: true }}
                primaryText={"Mahasiswa Tempati Kelas"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <SubMenu
              handleToggle={() => handleToggle("menuSales")}
              isOpen={state.menuSales}
              name="pos.menu.survei"
              icon={<BarChart />}
              dense={dense}
            >
              <MenuItemLink
                to="/survei"
                state={{ _scrollToTop: true }}
                primaryText={"Survei"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/soal"
                state={{ _scrollToTop: true }}
                primaryText={"Data Soal"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/asisten"
                state={{ _scrollToTop: true }}
                primaryText={"Data Asisten"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/hasilsurvei"
                state={{ _scrollToTop: true }}
                primaryText={"Hasil Survei"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <SubMenu
              handleToggle={() => handleToggle("menuJadwal")}
              isOpen={state.menuJadwal}
              name="pos.menu.jadwal"
              icon={<CalendarMonth />}
              dense={dense}
            >
              <MenuItemLink
                to="/matakul"
                state={{ _scrollToTop: true }}
                primaryText={"Mata Kuliah"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/jadwal"
                state={{ _scrollToTop: true }}
                primaryText={"Buat Jadwal"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/lihatjadwal"
                state={{ _scrollToTop: true }}
                primaryText={"Lihat Jadwal"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <SubMenu
              handleToggle={() => handleToggle("menuInventori")}
              isOpen={state.menuInventori}
              name="pos.menu.inventori"
              icon={<Inventory />}
              dense={dense}
            >
              <MenuItemLink
                to="/inventori"
                state={{ _scrollToTop: true }}
                primaryText={"Penerimaan"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/inventoripengajuan"
                state={{ _scrollToTop: true }}
                primaryText={"Pengajuan"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/peminjaman"
                state={{ _scrollToTop: true }}
                primaryText={"Peminjaman Inventori"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/pinjamruangan"
                state={{ _scrollToTop: true }}
                primaryText={"Peminjaman Ruangan"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/maintenance"
                state={{ _scrollToTop: true }}
                primaryText={"Perawatan"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <MenuItemLink
              to="/materi"
              state={{ _scrollToTop: true }}
              primaryText={"Materi"}
              leftIcon={<Book />}
              dense={dense}
            />

            <MenuItemLink
              to="/chat"
              state={{ _scrollToTop: true }}
              primaryText={"Chat"}
              leftIcon={<Chat />}
              dense={dense}
            />
          </>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {permissions ? (
        permissions.includes("mahasiswa") ? (
          <>
            <SubMenu
              handleToggle={() => handleToggle("menuHome")}
              isOpen={state.menuHome}
              name="pos.menu.home"
              icon={<DashboardOutlined />}
              dense={dense}
            >
              <MenuItemLink
                to="/dashboard"
                state={{ _scrollToTop: true }}
                primaryText={"Dashboard"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/profile"
                state={{ _scrollToTop: true }}
                primaryText={"Profile"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <SubMenu
              handleToggle={() => handleToggle("menuSales")}
              isOpen={state.menuSales}
              name="pos.menu.survei"
              icon={<BarChart />}
              dense={dense}
            >
              <MenuItemLink
                to="/survei"
                state={{ _scrollToTop: true }}
                primaryText={"Survei"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <SubMenu
              handleToggle={() => handleToggle("menuJadwal")}
              isOpen={state.menuJadwal}
              name="pos.menu.jadwal"
              icon={<CalendarMonth />}
              dense={dense}
            >
              <MenuItemLink
                to="/lihatjadwal"
                state={{ _scrollToTop: true }}
                primaryText={"Lihat Jadwal"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <SubMenu
              handleToggle={() => handleToggle("menuInventori")}
              isOpen={state.menuInventori}
              name="pos.menu.inventori"
              icon={<Inventory />}
              dense={dense}
            >
              <MenuItemLink
                to="/peminjaman"
                state={{ _scrollToTop: true }}
                primaryText={"Peminjaman Barang"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              {/* <MenuItemLink
                to="/pinjamruangan"
                state={{ _scrollToTop: true }}
                primaryText={"Peminjaman Ruangan"}
                leftIcon={<Adjust />}
                dense={dense}
              /> */}
            </SubMenu>

            <MenuItemLink
              to="/materi"
              state={{ _scrollToTop: true }}
              primaryText={"Materi"}
              leftIcon={<Book />}
              dense={dense}
            />

            <MenuItemLink
              to="/chat"
              state={{ _scrollToTop: true }}
              primaryText={"Chat"}
              leftIcon={<Chat />}
              dense={dense}
            />
          </>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {permissions ? (
        permissions.includes("dosen") ? (
          <>
            <SubMenu
              handleToggle={() => handleToggle("menuHome")}
              isOpen={state.menuHome}
              name="pos.menu.home"
              icon={<DashboardOutlined />}
              dense={dense}
            >
              <MenuItemLink
                to="/dashboard"
                state={{ _scrollToTop: true }}
                primaryText={"Dashboard"}
                leftIcon={<Adjust />}
                dense={dense}
              />
              <MenuItemLink
                to="/profile"
                state={{ _scrollToTop: true }}
                primaryText={"Profile"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <SubMenu
              handleToggle={() => handleToggle("menuJadwal")}
              isOpen={state.menuJadwal}
              name="pos.menu.jadwal"
              icon={<CalendarMonth />}
              dense={dense}
            >
              <MenuItemLink
                to="/lihatjadwal"
                state={{ _scrollToTop: true }}
                primaryText={"Lihat Jadwal"}
                leftIcon={<Adjust />}
                dense={dense}
              />
            </SubMenu>

            <MenuItemLink
              to="/materi"
              state={{ _scrollToTop: true }}
              primaryText={"Materi"}
              leftIcon={<Book />}
              dense={dense}
            />
          </>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </Box>
  );
};

export default Menu;
