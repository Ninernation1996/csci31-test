

 


const alltags = ['#Roadster', '#EVCar', '#SportsCar', '#ModelS', '#SelfDriving', '#Sedan', '#Optimus', '#Robot', '#A.I.Robot'];

function Tags(idx) {
    if (idx === 0) {
        return (
         <div className="flex gap-x-4">
            <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
               {alltags[0]}
            </span>
             <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
                {alltags[1]}
             </span>
              <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
                {alltags[2]}
             </span>
        </div>
        )
    } else if (idx === 1) {
        return (
            <div className="flex gap-x-4">
            <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
                {alltags[3]}
            </span>
             <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
             {alltags[4]}
             </span>
              <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
              {alltags[5]}
             </span>
        </div>
        )
    } else {
        return (
            <div className="flex gap-x-4">
            <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
                {alltags[6]}
            </span>
             <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
             {alltags[7]}
             </span>
              <span className="bg-sky-200 py-2 px-4 rounded-full hover:bg-sky-300 transition-all cursor-pointer active:bg-indigo-300">
              {alltags[8]}
             </span>
        </div>
    )
        
    }
}

    