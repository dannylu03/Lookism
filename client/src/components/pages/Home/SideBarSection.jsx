import React from "react";

function SideBarSection ({section}) {
    return (
        <div className="w- h-auto m-0 ml-16 bg-timberwolf overflow-hidden">
            <div className="flex items-center jsutify-center h-16 m-0 p-0">
                <h5 className="text-camel tracking-wider font-bold text-lg mr-auto ml-4 my-auto align-middle">{section}</h5>
            </div>
        </div>
    );
}

export default SideBarSection;
