// src/App.tsx
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-100 to-ocean-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-ocean-900 mb-4">
            🎣 Fishing Support App
          </h1>
          <p className="text-xl text-ocean-800 mb-8">
            あなたの釣りライフをサポートする最高のツール
          </p>
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-ocean-800 mb-4">
              Coming Soon...
            </h2>
            <ul className="text-left text-ocean-700 space-y-2">
              <li>✨ 天候・潮汐情報連動</li>
              <li>🐟 魚の活動予測</li>
              <li>📍 釣りスポット情報</li>
              <li>📝 釣果記録</li>
              <li>🌊 釣りマナー・安全ガイド</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App