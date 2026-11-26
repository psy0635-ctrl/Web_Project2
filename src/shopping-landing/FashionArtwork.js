// 외부 이미지 주소 없이 사용할 수 있는 패션 일러스트 SVG 컴포넌트
export default function FashionArtwork({ story }) {
    const [background, fabric, highlight] = story.palette;
    const gradientId = `fashion-${story.id}-gradient`;
    const shadowId = `fashion-${story.id}-shadow`;

    const drawings = {
        coat: <>
            <path d="M132 62 L95 79 53 235 91 247 111 174 103 344 256 344 248 174 269 247 307 235 265 79 228 62 204 89 156 89Z" fill={fabric}/>
            <path d="M132 62 L156 89 180 146 134 116 146 93 122 86 M228 62 L204 89 180 146 226 116 214 93 238 86" fill={highlight} opacity=".72"/>
            <path d="M180 146 V344 M118 223 H162 M198 223 H243 M106 279 H254" fill="none" stroke={highlight} strokeWidth="2" opacity=".55"/>
            <path d="M104 259 L254 271 252 282 105 271Z" fill={highlight} opacity=".7"/>
            {[164,190,216].map(y => <circle key={y} cx="190" cy={y} r="3.5" fill={highlight}/>)}
        </>,
        blazer: <>
            <path d="M128 65 L89 83 54 250 94 259 113 169 106 306 254 306 247 169 266 259 306 250 271 83 232 65 207 91 153 91Z" fill={fabric}/>
            <path d="M128 65 L153 91 180 158 134 123 144 101 120 94 M232 65 L207 91 180 158 226 123 216 101 240 94" fill={highlight} opacity=".62"/>
            <path d="M180 158 V306 M116 226 H158 M202 226 H244 M206 145 H239" stroke={highlight} strokeWidth="2" fill="none" opacity=".65"/>
            {[174,201,228].map(y => <circle key={y} cx="188" cy={y} r="4" fill={highlight}/>)}
        </>,
        dress: <>
            <path d="M142 57 L152 57 163 99 Q180 116 197 99 L208 57 218 57 213 124 Q203 150 201 177 Q218 242 264 334 Q180 362 96 334 Q142 242 159 177 Q157 150 147 124Z" fill={fabric}/>
            <path d="M159 177 Q180 186 201 177 M180 184 Q168 273 156 341 M196 185 Q207 278 230 343" fill="none" stroke={highlight} strokeWidth="2" opacity=".45"/>
            <path d="M153 122 Q180 148 207 122" fill="none" stroke={highlight} opacity=".5" strokeWidth="2"/>
        </>,
        bag: <>
            <path d="M119 153 V119 Q119 61 180 61 Q241 61 241 119 V153" fill="none" stroke={fabric} strokeWidth="15"/>
            <rect x="69" y="145" width="222" height="162" rx="18" fill={fabric}/>
            <path d="M70 165 Q180 217 290 165 L290 194 Q180 247 70 194Z" fill={highlight} opacity=".36"/>
            <rect x="165" y="200" width="30" height="23" rx="3" fill={highlight}/>
            <path d="M86 288 H274 M95 157 V284 M265 157 V284" stroke={highlight} fill="none" opacity=".44" strokeWidth="2" strokeDasharray="5 4"/>
        </>,
        knit: <>
            <path d="M137 78 L90 95 51 231 100 246 121 181 117 310 243 310 239 181 260 246 309 231 270 95 223 78 Q180 110 137 78Z" fill={fabric}/>
            <path d="M137 78 Q180 110 223 78 L217 94 Q180 124 143 94Z" fill={highlight}/>
            {Array.from({ length: 10 }, (_, i) => <path key={i} d={`M${126+i*12} 126 V298`} stroke={background} strokeWidth="2" opacity=".45"/>)}
            <path d="M117 292 H243 V310 H117Z M51 231 L100 246 96 259 47 244Z M309 231 L260 246 264 259 313 244Z" fill={highlight} opacity=".9"/>
        </>,
        shoes: <>
            {[0,1].map(i => <g key={i} transform={`translate(${i*101} ${i*36}) rotate(-18 126 200)`}>
                <path d="M94 86 Q128 72 150 104 L160 180 Q182 224 164 273 Q135 306 91 277 Q72 251 83 205 L79 121 Q79 99 94 86Z" fill={fabric}/>
                <path d="M104 106 Q128 95 140 115 L146 166 Q124 187 95 161 L91 119Z" fill={highlight} opacity=".55"/>
                <path d="M87 183 Q125 197 158 184 L163 207 Q125 222 84 208Z" fill={highlight} opacity=".6"/>
                <path d="M89 228 Q126 207 162 230" fill="none" stroke={highlight} opacity=".55" strokeWidth="2"/>
            </g>)}
        </>,
    };

    return (
        <svg viewBox="0 0 360 400" className="fashion-artwork" aria-hidden="true" focusable="false">
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={highlight}/>
                    <stop offset="100%" stopColor={background}/>
                </linearGradient>
                <filter id={shadowId} x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="7" dy="12" stdDeviation="10" floodColor="#211b18" floodOpacity=".25"/>
                </filter>
            </defs>
            <rect width="360" height="400" fill={`url(#${gradientId})`}/>
            <path d="M0 0 H220 L55 400 H0Z" fill="#fff" opacity=".12"/>
            <rect x="19" y="19" width="322" height="362" fill="none" stroke={fabric} opacity=".22"/>
            <g filter={`url(#${shadowId})`}>{drawings[story.id]}</g>
            <text x="29" y="39" fontSize="10" fill={fabric} fontFamily="Arial" letterSpacing="2">MODE / EDIT</text>
            <text x="331" y="365" textAnchor="end" fontSize="10" fill={fabric} fontFamily="Arial" letterSpacing="2">26 — WINTER</text>
        </svg>
    );
}