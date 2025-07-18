function ScoreCard({category, scoreData, about, goodScore}) {
 if (!scoreData) {
    return <></>;
  }

    return (
        <div className="w-full h-full min-h-70 max-w-140 min-w-100 px-5 py-3 text-white flex flex-col gap-3 border-2 border-green-600/30 rounded-lg font-grotesk justify-center scale-80 sm:scale-90 md:scale-100">
            <h1 className="text-2xl font-semibold text-green-500">{category}</h1>
            <p className="text-gray-300">{about}</p>
            <div className="text-xl font-semibold">SCORE: <span className="text-2xl text-green-500">{scoreData}</span></div>
           {goodScore? <div className="bg-gray-800/70 text-white py-1 px-2 rounded-md w-fit">Good Score: {goodScore} </div>:null}
        </div>
    )
}

export default ScoreCard;