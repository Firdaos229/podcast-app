const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2.5">
        <div className="w-12 h-12 border rounded-lg bg-gray-300 "></div>
        <div className="flex flex-col">
          <h6 className="text-sm text-[#ffffff] font-semibold">Karnel Production</h6>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#ffffff]">Studio</span>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-xs text-gray-500">Votre slogan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logo;
