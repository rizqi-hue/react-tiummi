import { Chip, useMediaQuery, Theme, Box } from "@mui/material";
import {
  ListBase,
  Pagination,
  Title,
  SortButton,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  FilterContext,
  FilterForm,
  SearchInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  useTranslate,
  InputProps,
} from "react-admin";
import Aside from "./Aside";
import ImageList from "./GridList";

const InformasiList = () => {
  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <div className="">
      <ListBase perPage={24} sort={{ field: "id", order: "ASC" }}>
        <Title defaultTitle={"Informasi"} />
        <FilterContext.Provider value={productFilters}>
          <ListActions isSmall={isSmall} />
          {isSmall && (
            <Box m={1}>
              <FilterForm />
            </Box>
          )}
        </FilterContext.Provider>
        <Box display="flex">
          <Aside />
          <Box width={isSmall ? "auto" : "calc(100% - 16em)"}>
            <ImageList />
            <Pagination rowsPerPageOptions={[24, 48, 72]} />
          </Box>
        </Box>
      </ListBase>
    </div>
  );
};

const QuickFilter = ({ label }: InputProps) => {
  const translate = useTranslate();
  return <Chip sx={{ mb: 1 }} label={translate(label as string)} />;
};

export const productFilters = [
  <SearchInput source="q" alwaysOn />,
  <ReferenceInput
    source="category_id"
    reference="categories"
    sort={{ field: "id", order: "ASC" }}
  >
    <SelectInput source="name" />
  </ReferenceInput>,
  <NumberInput source="width_gte" />,
  <NumberInput source="width_lte" />,
  <NumberInput source="height_gte" />,
  <NumberInput source="height_lte" />,
  <QuickFilter
    label="resources.products.fields.stock_lte"
    source="stock_lte"
    defaultValue={10}
  />,
];

const ListActions = ({ isSmall }: any) => (
  <TopToolbar sx={{ minHeight: { sm: 56 } }}>
    {isSmall && <FilterButton />}
    <SortButton fields={["reference", "sales", "stock"]} />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

export default InformasiList;
