const SkeletonLoader = () => {
    return (
      <div className="animate-pulse">
        {/* Navbar Skeleton */}
        <div className="h-16 bg-gray-300 w-full"></div>
  
        {/* Hero Section Skeleton */}
        <div className="h-[calc(100vh-64px)] bg-gray-200 flex flex-col justify-center items-center">
          <div className="w-3/4 h-8 bg-gray-300 mb-4"></div>
          <div className="w-1/2 h-6 bg-gray-300"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonLoader;
  