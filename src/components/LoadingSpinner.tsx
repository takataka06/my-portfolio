//非同期処理中に表示するスピナーコンポーネント

export default function LoadingSpinner() {
  return (
    <>
      <div className="loader-wrapper">
        <div className="packman"></div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  )
}
