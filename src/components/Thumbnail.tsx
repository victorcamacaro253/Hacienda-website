const Thumbnail = ({ items, currentIndex }) => {
    return (
        <div className="absolute bottom-[50px] left-1/2 -translate-x-[15%] z-30 flex gap-5">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`w-[150px] h-[220px] border-2   rounded-xl flex-shrink-0 relative transition-all duration-500 ease-in-out ${
                        index === currentIndex ? 'scale-110 opacity-100 border-[#f1683a]' : 'opacity-70 border-transparent'
                    }`}
                >
                    <img 
                        src={item.thumbnail || item.img} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                    />
                    {item.title && (
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                            <div className="font-medium">{item.title}</div>
                            <div className="font-light">{item.description}</div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Thumbnail;