const loading = () => {
  return (
    <section className="py-[30px]">
      <div className="container grid gap-3 grid-cols-2 max-[970px]:grid-cols-1">
        <div className="flex flex-row-reverse gap-3 max-[1015px]:flex-col max-[970px]:flex-row-reverse max-[571px]:flex-col">
          <div className="w-full rounded-[20px] bg-gray-200 animate-pulse h-[350px]" />
          <div className="flex gap-2 items-center max-[571px]:justify-center">
            <div className="flex flex-col gap-2 items-center max-[1015px]:flex-row max-[970px]:flex-col max-[571px]:flex-row-reverse">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="size-[150px] max-[530px]:size-[110px] bg-gray-200 rounded-md animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-[707px]:w-full">
          <div className="h-10 w-2/3 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-1/2 bg-gray-200 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-200 rounded animate-pulse" />

          <div className="space-y-2 py-5 border-t border-t-[#0000001A]">
            <div className="h-5 w-1/3 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse" />
            <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex gap-5 py-6 border-t border-t-[#0000001A]">
            <div className="flex items-center gap-3 bg-[#F0F0F0] rounded-xl p-2">
              <div className="w-10 h-10 bg-gray-200 rounded-md animate-pulse" />
              <div className="w-10 h-10 bg-gray-200 rounded-md animate-pulse" />
              <div className="w-10 h-10 bg-gray-200 rounded-md animate-pulse" />
            </div>
            <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default loading
