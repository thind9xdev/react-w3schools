interface DividerProps {
  type: "dotted" | "dashed" | "solid" | "rounded";
}
const Divider = ({ type }: DividerProps) => {
  return (
    <>
      <hr
        style={
          type === "rounded"
            ? { borderTop: `8px solid #bbb`, borderRadius: "5px" }
            : { borderTop: `3px ${type} #bbb` }
        }
      />
    </>
  );
};
export default Divider;
