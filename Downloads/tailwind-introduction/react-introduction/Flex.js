function MainFlex({ children, classNames}) {
  return (
    <div className={`flex flex-row gap-x-5 ${classNames}`}>{children}</div>
  )
}
function FlexOne({ children, classNames }) {
  return (
    <div className={`flex flex-row gap-x-5 bg-blue-400 py-2 px-2 rounded-full  ${classNames}`}>{children}</div>
  );
};
function FlexTwo({ children, classNames }) {
  return (
    <div className={`flex flex-row gap-x-5 bg-blue-400 py-2 px-2 rounded-full  ${classNames}`}>{children}</div>
  );
};
function FlexThree({ children, classNames }) {
  return (
    <div className={`flex flex-row gap-x-5 bg-blue-400 py-2 px-2 rounded-full  ${classNames}`}>{children}</div>
  );
}
const name = 'Craig Langhorst';
console.log(`Hello ${name}!`)
