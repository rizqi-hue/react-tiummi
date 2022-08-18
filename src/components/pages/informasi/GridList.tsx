import { useTheme, useMediaQuery } from "@mui/material";
import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useCreatePath, NumberField, useListContext } from "react-admin";
import { Link } from "react-router-dom";
import { Image } from "@mui/icons-material";

const GridList = () => {
  const { isLoading } = useListContext();
  return isLoading ? <LoadingGridList /> : <LoadedGridList />;
};

const useColsForWidth = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  // there are all dividers of 24, to have full rows on each page
  if (xl) return 8;
  if (lg) return 6;
  if (md) return 4;
  if (sm) return 3;
  return 2;
};

const times = (nbChildren: number, fn: (key: number) => any) =>
  Array.from({ length: nbChildren }, (_, key) => fn(key));

const LoadingGridList = () => {
  const { perPage } = useListContext();
  const cols = useColsForWidth();
  return (
    <ImageList rowHeight={180} cols={cols} sx={{ m: 0 }}>
      {times(perPage, (key) => (
        <ImageListItem key={key}>
          <Box bgcolor="grey.300" height="100%" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const LoadedGridList = () => {
  const { data } = useListContext();
  const cols = useColsForWidth();
  const createPath = useCreatePath();

  if (!data) return null;

  return (
    <ImageList rowHeight={180} cols={cols} sx={{ m: 0 }}>
      {data.map((record) => (
        <ImageListItem
          component={Link}
          key={record.id}
          to={createPath({
            resource: "news",
            id: record.id,
            type: "edit",
          })}
        >
          {record.image != "" && record.image != null ? (
            <div className="h-full rounded-xl w-full">
              <img
                src={`${process.env.REACT_APP_DATA_PROVIDER}/${record.image}`}
                alt=""
                className="rounded-xl"
              />
            </div>
          ) : (
            <div className="h-full bg-gray-200 rounded-xl w-full place-content-center items-center flex flex-row">
              <Image />
              <div className="text-xs">Image Not Found</div>
            </div>
          )}

          <ImageListItemBar
            title={record.title}
            subtitle={
              <span>
                {record.kategori}, {record.type}, {record.status}
                <NumberField
                  source="qty"
                  record={record}
                  color="inherit"
                  sx={{
                    display: "inline",
                    fontSize: "1em",
                  }}
                />
              </span>
            }
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GridList;
