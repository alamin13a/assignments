export default function NotFound() {
  return (
    <div className="w-[100vw] h-[80vh] text-[#444444] flex flex-col justify-center items-center">
      <h1 className="text-[150px] font-bold">404</h1>
      <h2 className="text-[36px] font-medium">Not Found</h2>
      <p>The resource requested could not be found on this server!</p>
    </div>
  );
}
