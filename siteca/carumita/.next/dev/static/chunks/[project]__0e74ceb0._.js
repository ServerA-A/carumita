(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Background3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Background3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/siteca/carumita/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/siteca/carumita/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@react-three/fiber'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@react-three/drei'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function MatrixCore() {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const materialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    useFrame({
        "MatrixCore.useFrame": (state)=>{
            if (meshRef.current) {
                meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
                meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
                // Follow mouse position slowly
                const targetX = state.pointer.x * state.viewport.width / 4;
                const targetY = state.pointer.y * state.viewport.height / 4;
                meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
                meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
            }
            if (materialRef.current) {
                // Increase distortion based on pointer distance from center
                const pointerDistance = Math.sqrt(state.pointer.x ** 2 + state.pointer.y ** 2);
                const targetDistort = 0.3 + pointerDistance * 0.5;
                materialRef.current.distort += (targetDistort - materialRef.current.distort) * 0.1;
            }
        }
    }["MatrixCore.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Float, {
        speed: 3,
        rotationIntensity: 2,
        floatIntensity: 3,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icosahedron, {
            ref: meshRef,
            args: [
                1.5,
                3
            ],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeshDistortMaterial, {
                ref: materialRef,
                color: "#00ff41",
                attach: "material",
                distort: 0.5,
                speed: 3,
                wireframe: true,
                roughness: 0.2,
                metalness: 0.8
            }, void 0, false, {
                fileName: "[project]/components/Background3D.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Background3D.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Background3D.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(MatrixCore, "Vhup5/xdTgTwfmv7+VZYkowmGGs=", false, function() {
    return [
        useFrame
    ];
});
_c = MatrixCore;
function DataNode({ radius = 3, speed = 0.5, size = 0.5, color = "#00ff00", offset = 0, yOffset = 0 }) {
    _s1();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    useFrame({
        "DataNode.useFrame": (state)=>{
            if (meshRef.current) {
                const time = state.clock.getElapsedTime();
                const angle = time * speed + offset;
                // Calculate orbit position
                meshRef.current.position.x = Math.cos(angle) * radius;
                meshRef.current.position.z = Math.sin(angle) * radius;
                // Add a slight vertical hovering effect
                meshRef.current.position.y = Math.sin(time * speed * 2 + offset) * 0.5 + yOffset;
                // Rotate the node on its own axis
                meshRef.current.rotation.y += 0.02;
                meshRef.current.rotation.x += 0.01;
            }
        }
    }["DataNode.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icosahedron, {
        ref: meshRef,
        args: [
            size,
            1
        ],
        position: [
            radius,
            yOffset,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
            color: color,
            wireframe: true
        }, void 0, false, {
            fileName: "[project]/components/Background3D.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Background3D.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s1(DataNode, "/vg1AmA8+P3+Fj0/y210JTVKtL0=", false, function() {
    return [
        useFrame
    ];
});
_c1 = DataNode;
function Background3D() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[-1] opacity-70 pointer-events-auto mix-blend-screen bg-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Canvas, {
            camera: {
                position: [
                    0,
                    0,
                    5
                ]
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.5
                }, void 0, false, {
                    fileName: "[project]/components/Background3D.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: [
                        10,
                        10,
                        5
                    ],
                    intensity: 1,
                    color: "#00ff00"
                }, void 0, false, {
                    fileName: "[project]/components/Background3D.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixCore, {}, void 0, false, {
                    fileName: "[project]/components/Background3D.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataNode, {
                    radius: 4,
                    speed: 0.2,
                    size: 0.3,
                    color: "#00ff41",
                    offset: 0,
                    yOffset: 1.5
                }, void 0, false, {
                    fileName: "[project]/components/Background3D.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataNode, {
                    radius: 6.5,
                    speed: 0.15,
                    size: 0.5,
                    color: "#0bd64f",
                    offset: Math.PI / 2,
                    yOffset: -1
                }, void 0, false, {
                    fileName: "[project]/components/Background3D.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataNode, {
                    radius: 8,
                    speed: 0.1,
                    size: 0.8,
                    color: "#008f11",
                    offset: Math.PI,
                    yOffset: 2
                }, void 0, false, {
                    fileName: "[project]/components/Background3D.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataNode, {
                    radius: 10,
                    speed: 0.05,
                    size: 0.4,
                    color: "#00ff00",
                    offset: Math.PI / 1.5,
                    yOffset: -2.5
                }, void 0, false, {
                    fileName: "[project]/components/Background3D.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stars, {
                    radius: 100,
                    depth: 50,
                    count: 5000,
                    factor: 3,
                    saturation: 1,
                    fade: true,
                    speed: 2
                }, void 0, false, {
                    fileName: "[project]/components/Background3D.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Background3D.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Background3D.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c2 = Background3D;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MatrixCore");
__turbopack_context__.k.register(_c1, "DataNode");
__turbopack_context__.k.register(_c2, "Background3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/siteca/carumita/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/siteca/carumita/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/siteca/carumita/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lucide-react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Background3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Background3D.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// --- DATA ---
const skillGroups = [
    {
        title: "Languages",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Code2, {
            className: "w-6 h-6 text-indigo-500"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 33,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        items: [
            "C++",
            "JavaScript",
            "C",
            "Java",
            "Python"
        ],
        grad: "from-indigo-500/20 to-blue-500/20",
        border: "group-hover:border-indigo-500/50"
    },
    {
        title: "Frameworks & AI",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Terminal, {
            className: "w-6 h-6 text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 40,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        items: [
            "HTML/CSS",
            "Node.js",
            "React",
            "NumPy",
            "Scikit",
            "LangChain",
            "TensorFlow"
        ],
        grad: "from-emerald-500/20 to-teal-500/20",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "Tools & DBs",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Database, {
            className: "w-6 h-6 text-fuchsia-500"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 47,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        items: [
            "MySQL",
            "MongoDB",
            "Git",
            "REST APIs",
            "RAG"
        ],
        grad: "from-fuchsia-500/20 to-pink-500/20",
        border: "group-hover:border-fuchsia-500/50"
    },
    {
        title: "Core Skills",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrainCircuit, {
            className: "w-6 h-6 text-amber-500"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 54,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        items: [
            "Problem-Solving",
            "Team Collaboration",
            "Management",
            "Adaptability"
        ],
        grad: "from-amber-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50"
    }
];
const projects = [
    {
        name: "Vibe - Emotion Detection",
        date: "January 2025",
        summary: "Real-time facial emotion recognition with OpenCV and DeepFace, wrapped in an interactive Streamlit dashboard.",
        impact: "Deployed a seamless user-facing computer vision solution with low latency monitoring.",
        tech: [
            "Python",
            "OpenCV",
            "DeepFace",
            "TensorFlow",
            "Streamlit"
        ],
        link: "https://github.com/rumita-mandal",
        color: "from-blue-600 to-indigo-600"
    },
    {
        name: "CineMind Engine",
        date: "September 2025",
        summary: "Hybrid movie recommendation engine combining user preferences with content similarity and collaborative filtering.",
        impact: "Applied TF-IDF and cosine similarity for high-relevance catalog ranking and discovery.",
        tech: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "TF-IDF"
        ],
        link: "https://github.com/rumita-mandal",
        color: "from-emerald-600 to-teal-600"
    },
    {
        name: "Health Risk Detection System",
        date: "2026",
        summary: "A predictive system to evaluate and monitor health risks and patient medication adherence.",
        impact: "Leveraged predictive modeling to improve tracking and early interventions for patient adherence.",
        tech: [
            "Python",
            "Machine Learning",
            "Data Analysis"
        ],
        link: "https://github.com/rumita-mandal/Health_Risk_Detection_System-Adherence-",
        color: "from-rose-600 to-pink-600"
    },
    {
        name: "CausalRiskNet",
        date: "2026",
        summary: "A causal inference network architecture for evaluating complex risk relationships in datasets.",
        impact: "Implemented advanced causal discovery algorithms to isolate true risk factors beyond standard correlations.",
        tech: [
            "Python",
            "Deep Learning",
            "Causal Inference"
        ],
        link: "https://github.com/rumita-mandal/CausalRiskNet",
        color: "from-fuchsia-600 to-purple-600"
    }
];
const milestones = [
    {
        type: "edu",
        title: "Lovely Professional University",
        subtitle: "B.Tech in CSE (CGPA: 8.01)",
        date: "2023 - Present",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraduationCap, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 101,
            columnNumber: 129
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        type: "cert",
        title: "Computation Theory & Finite Automata",
        subtitle: "Infosys",
        date: "Nov 2025",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Award, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 102,
            columnNumber: 111
        }, ("TURBOPACK compile-time value", void 0)),
        link: "#"
    },
    {
        type: "achieve",
        title: "S1 List Position",
        subtitle: "Top academic performance among 40k+ students",
        date: "Nov 2025",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkles, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 103,
            columnNumber: 131
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        type: "achieve",
        title: "Hackathon Finalist",
        subtitle: "National level hackathon top 10 finish",
        date: "Oct 2025",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkles, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 104,
            columnNumber: 127
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        type: "cert",
        title: "ChatGPT-4 Prompt Engineering",
        subtitle: "Infosys",
        date: "Aug 2025",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Award, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 105,
            columnNumber: 103
        }, ("TURBOPACK compile-time value", void 0)),
        link: "#"
    },
    {
        type: "cert",
        title: "C++ Programming & DSA",
        subtitle: "CSE Pathsala",
        date: "Jul 2025",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Award, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 106,
            columnNumber: 101
        }, ("TURBOPACK compile-time value", void 0)),
        link: "#"
    },
    {
        type: "edu",
        title: "City Montessori School",
        subtitle: "Intermediate (89%)",
        date: "2021 - 2023",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraduationCap, {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 107,
            columnNumber: 110
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Node.js",
    "Tailwind CSS",
    "OpenCV",
    "TensorFlow",
    "Pandas",
    "Scikit",
    "MongoDB",
    "MySQL",
    "C++"
];
function Home() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark"); // "dark" | "light"
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Mouse Interaction
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = {
        damping: 50,
        stiffness: 400
    };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 1000,
        height: 800
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                mouseX.set(window.innerWidth / 2);
                mouseY.set(window.innerHeight / 2);
            }
            const handleMouseMove = {
                "Home.useEffect.handleMouseMove": (e)=>{
                    mouseX.set(e.clientX);
                    mouseY.set(e.clientY);
                }
            }["Home.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["Home.useEffect.timer"], 2800); // 2.8s loading sequence
            return ({
                "Home.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    clearTimeout(timer);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        mouseX,
        mouseY
    ]);
    // Create interactive background glow
    const pointerGlow = {
        background: useTransform([
            smoothMouseX,
            smoothMouseY
        ], {
            "Home.useTransform": ([x, y])=>`radial-gradient(1000px circle at ${x}px ${y}px, ${theme === "dark" ? "rgba(99,102,241,0.08)" : "rgba(99,102,241,0.05)"}, transparent 80%)`
        }["Home.useTransform"])
    };
    // Parallax transforms for hero elements
    const parallaxX = useTransform(smoothMouseX, [
        0,
        windowSize.width
    ], [
        -15,
        15
    ]);
    const parallaxY = useTransform(smoothMouseY, [
        0,
        windowSize.height
    ], [
        -15,
        15
    ]);
    const rotateX = useTransform(smoothMouseY, [
        0,
        windowSize.height
    ], [
        5,
        -5
    ]);
    const rotateY = useTransform(smoothMouseX, [
        0,
        windowSize.width
    ], [
        -5,
        5
    ]);
    const isDark = theme === "dark";
    const bgMain = isDark ? "bg-black" : "bg-gray-50";
    const textMain = isDark ? "text-[#00ff41]" : "text-gray-900";
    const textMuted = isDark ? "text-[#008f11]" : "text-gray-600";
    const cardBg = isDark ? "bg-black/40 border border-[#00ff41]/30 backdrop-blur-md" : "bg-white border border-gray-200 shadow-sm";
    const cardBorder = isDark ? "border-[#00ff41]/30" : "border-gray-200";
    const cardHoverBg = isDark ? "hover:bg-[#00ff41]/10 hover:border-[#00ff41]" : "hover:bg-gray-50 hover:border-indigo-400 hover:shadow-md";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen transition-colors duration-500 ease-in-out ${bgMain} ${textMain} selection:bg-[#00ff41]/30 selection:text-white overflow-x-hidden font-mono relative`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.6,
                        ease: "easeOut"
                    },
                    className: "fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-[#00ff41] select-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center max-w-lg w-full px-6 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                animate: {
                                    opacity: [
                                        1,
                                        0.4,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                className: "text-3xl sm:text-4xl font-black tracking-widest text-center uppercase",
                                children: "SYSTEM_BOOT..."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-3 border-2 border-[#00ff41]/40 p-[2px] rounded-none shadow-[0_0_15px_rgba(0,255,65,0.2)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    initial: {
                                        width: "0%"
                                    },
                                    animate: {
                                        width: "100%"
                                    },
                                    transition: {
                                        duration: 2.4,
                                        ease: "easeInOut"
                                    },
                                    className: "h-full bg-[#00ff41] shadow-[0_0_10px_#00ff41]"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full text-xs sm:text-sm font-bold flex flex-col gap-2 mt-4 opacity-80 backdrop-blur-sm p-4 border border-[#00ff41]/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        children: "> ROOT_ACCESS... INITIALIZED"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.8
                                        },
                                        children: "> LOADING_MATRIX_CORE... OK"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 1.5
                                        },
                                        children: "> DECRYPTING_PORTFOLIO_DATA..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 2.2
                                        },
                                        className: "text-white",
                                        children: "> ACCESS_GRANTED"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 183,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Background3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                className: "pointer-events-none fixed inset-0 z-20",
                style: pointerGlow
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none overflow-hidden",
                children: [
                    isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[length:24px_24px] opacity-70"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,65,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gray-50"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:24px_24px] opacity-70"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 opacity-90"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        animate: {
                            rotate: 360,
                            scale: [
                                1,
                                1.1,
                                1
                            ]
                        },
                        transition: {
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] mix-blend-screen opacity-20 bg-[#00ff41]/20"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        animate: {
                            rotate: -360,
                            scale: [
                                1,
                                1.2,
                                1
                            ]
                        },
                        transition: {
                            duration: 50,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        className: "absolute top-[40%] -left-[20%] w-[70vw] h-[70vw] rounded-full blur-[140px] mix-blend-screen opacity-10 bg-[#008f11]/20"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        animate: {
                            x: [
                                0,
                                50,
                                0
                            ],
                            y: [
                                0,
                                -50,
                                0
                            ]
                        },
                        transition: {
                            duration: 30,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: `absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[100px] mix-blend-screen opacity-20 ${isDark ? 'bg-fuchsia-600/30' : 'bg-fuchsia-300/40'}`
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.nav, {
                initial: {
                    y: -50,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                },
                className: `fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-6 py-3.5 rounded-full backdrop-blur-2xl border ${isDark ? 'bg-white/5 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]' : 'bg-white/60 border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'} transition-all`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 pr-6 border-r border-current opacity-80",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-extrabold text-xl tracking-tighter",
                            children: [
                                "RM",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-indigo-500",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 71
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:flex items-center gap-8 text-sm font-bold tracking-wide",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#about",
                                className: `${textMuted} hover:${textMain} hover:scale-105 transition-all`,
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#projects",
                                className: `${textMuted} hover:${textMain} hover:scale-105 transition-all`,
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#skills",
                                className: `${textMuted} hover:${textMain} hover:scale-105 transition-all`,
                                children: "Skills"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: `${textMuted} hover:${textMain} hover:scale-105 transition-all`,
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTheme(isDark ? "light" : "dark"),
                        className: `p-2.5 rounded-full transition-all hover:scale-110 active:scale-95 ${isDark ? 'bg-white/10 hover:bg-white/20 text-yellow-300' : 'bg-black/5 hover:bg-black/10 text-indigo-600'} shadow-inner`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                            mode: "wait",
                            children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    rotate: -90,
                                    opacity: 0
                                },
                                animate: {
                                    rotate: 0,
                                    opacity: 1
                                },
                                exit: {
                                    rotate: 90,
                                    opacity: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sun, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 145
                                }, this)
                            }, "sun", false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    rotate: -90,
                                    opacity: 0
                                },
                                animate: {
                                    rotate: 0,
                                    opacity: 1
                                },
                                exit: {
                                    rotate: 90,
                                    opacity: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Moon, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 146
                                }, this)
                            }, "moon", false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pt-48 pb-32 flex flex-col gap-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                animate: {
                                    y: [
                                        0,
                                        -40,
                                        0
                                    ],
                                    x: [
                                        0,
                                        20,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                className: "absolute left-[10%] top-[20%] text-[#00ff41]/20 font-bold text-2xl rotate-90",
                                style: {
                                    transformStyle: "preserve-3d"
                                },
                                children: "01100010 01101001"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                animate: {
                                    y: [
                                        -50,
                                        50,
                                        -50
                                    ],
                                    x: [
                                        0,
                                        -10,
                                        0
                                    ],
                                    rotate: [
                                        0,
                                        180,
                                        360
                                    ]
                                },
                                transition: {
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                className: "absolute right-[15%] top-[30%] w-32 h-32 border border-[#00ff41]/20 rounded-sm flex items-center justify-center mix-blend-screen",
                                style: {
                                    transformStyle: "preserve-3d"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#00ff41]/30",
                                    children: "SYSOUT"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                animate: {
                                    opacity: [
                                        0.1,
                                        0.5,
                                        0.1
                                    ],
                                    scale: [
                                        1,
                                        1.1,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                className: "absolute right-[30%] bottom-[15%] text-[#00ff41]/30 font-mono tracking-[0.5em] text-sm",
                                children: "A C C E S S _ G R A N T E D"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                animate: {
                                    y: [
                                        0,
                                        60,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                },
                                className: "absolute left-[20%] top-[60%] flex flex-col gap-1 text-[#00ff41]/10 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "{"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pl-4",
                                        children: '"status": 200,'
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pl-4",
                                        children: '"auth": "OK"'
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "}"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                animate: {
                                    y: [
                                        100,
                                        -100
                                    ],
                                    opacity: [
                                        0,
                                        1,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 3
                                },
                                className: "absolute left-[45%] bottom-[5%] w-[1px] h-32 bg-gradient-to-b from-transparent via-[#00ff41]/50 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                animate: {
                                    x: [
                                        -100,
                                        100
                                    ],
                                    opacity: [
                                        0,
                                        1,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 2
                                },
                                className: "absolute left-[-5%] top-[75%] w-64 h-[1px] bg-gradient-to-r from-transparent via-[#00ff41]/40 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                animate: {
                                    scale: [
                                        0.8,
                                        1
                                    ],
                                    opacity: [
                                        0,
                                        0.4,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "circIn",
                                    delay: 1
                                },
                                className: "absolute left-[70%] top-[10%] text-red-500/40 text-xs font-black",
                                children: "[ERR_SEGFAULT]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                animate: {
                                    y: [
                                        0,
                                        -100
                                    ],
                                    opacity: [
                                        0,
                                        0.5,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 1.5
                                },
                                className: "absolute right-[5%] bottom-[40%] text-[#00ff41]/20 font-mono flex flex-col gap-0.5 text-[0.6rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0x00A1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0x00A2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0x00A3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0x00A4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "0x00A5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            [
                                ...technologies,
                                "Machine Learning",
                                "Data Science",
                                "Web Dev",
                                "Problem Solving",
                                "APIs",
                                "Git",
                                "Figma",
                                "Deep Learning",
                                "Algorithms",
                                "Leadership"
                            ].map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    animate: {
                                        y: [
                                            0,
                                            i % 2 === 0 ? -40 : -60,
                                            0
                                        ],
                                        x: [
                                            0,
                                            i % 2 === 0 ? 30 : -30,
                                            0
                                        ],
                                        opacity: [
                                            0.3,
                                            0.8,
                                            0.3
                                        ]
                                    },
                                    drag: true,
                                    dragConstraints: {
                                        left: -100,
                                        right: 100,
                                        top: -100,
                                        bottom: 100
                                    },
                                    dragElastic: 0.2,
                                    whileHover: {
                                        scale: 1.1,
                                        zIndex: 50,
                                        opacity: 1,
                                        backgroundColor: "rgba(0,255,65,0.2)"
                                    },
                                    whileTap: {
                                        cursor: "grabbing",
                                        scale: 0.95
                                    },
                                    transition: {
                                        duration: 10 + i % 5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 0.2
                                    },
                                    className: "absolute cursor-grab active:cursor-grabbing px-4 sm:px-6 py-2 sm:py-3 rounded-sm backdrop-blur-sm opacity-40 transition-colors duration-300 border font-mono font-bold text-xs sm:text-sm shadow-2xl bg-black border-[#00ff41]/50 text-[#00ff41]",
                                    style: {
                                        top: `${i * 7 % 80}%`,
                                        left: `${i * 13 % 85}%`,
                                        scale: 0.7 + i % 4 * 0.15
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#008f11] mr-2",
                                            children: "$"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this),
                                        tech
                                    ]
                                }, `float-${i}`, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "home",
                        className: "relative z-10 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[75vh] text-center pt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                style: {
                                    x: parallaxX,
                                    y: parallaxY
                                },
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.5,
                                    bounce: 0.4,
                                    type: "spring"
                                },
                                className: "inline-flex items-center gap-3 px-4 py-2 rounded-sm mb-10 border backdrop-blur-md shadow-sm bg-[#00ff41]/10 border-[#00ff41]/30 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-3 w-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full bg-[#00ff41] opacity-75 rounded-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex h-3 w-3 bg-[#00ff41] rounded-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold tracking-[0.2em] uppercase text-[#00ff41]",
                                        children: "System Online_"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.h1, {
                                style: {
                                    x: parallaxX,
                                    y: parallaxY,
                                    rotateX,
                                    rotateY,
                                    transformStyle: "preserve-3d"
                                },
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.1
                                },
                                className: "text-6xl sm:text-7xl md:text-[6.5rem] font-black tracking-tighter mb-6 leading-[1.05] uppercase",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-block group",
                                        children: [
                                            "Rumita Mandal",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-0 left-0 w-full h-full bg-[#00ff41] opacity-0 mix-blend-overlay group-hover:opacity-100 animate-pulse pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                                        animate: {
                                            opacity: [
                                                1,
                                                0.5,
                                                1,
                                                0.8,
                                                1
                                            ]
                                        },
                                        transition: {
                                            repeat: Infinity,
                                            duration: 4,
                                            ease: "linear"
                                        },
                                        className: "text-3xl sm:text-4xl md:text-5xl text-[#00ff41]/80 mt-4 block font-mono",
                                        style: {
                                            transform: "translateZ(30px)"
                                        },
                                        children: [
                                            "> AI & Machine Learning Dev",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-pulse",
                                                children: "_"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.p, {
                                style: {
                                    x: useTransform(smoothMouseX, [
                                        0,
                                        windowSize.width
                                    ], [
                                        -8,
                                        8
                                    ]),
                                    y: useTransform(smoothMouseY, [
                                        0,
                                        windowSize.height
                                    ], [
                                        -8,
                                        8
                                    ])
                                },
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                className: `text-xl sm:text-2xl md:text-3xl ${textMuted} max-w-3xl mx-auto leading-relaxed mb-12 font-mono before:content-['//_'] before:text-[#00ff41]/40`,
                                children: "Crafting scalable architecture and bridging root mechanics with AI neural nets."
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.3
                                },
                                className: "flex flex-wrap items-center justify-center gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://github.com/rumita-mandal",
                                        target: "_blank",
                                        className: "group flex items-center gap-3 px-8 py-4 rounded-sm font-mono font-bold transition-all duration-300 hover:-translate-y-1 bg-[#00ff41] text-black hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Github, {
                                                className: "w-5 h-5 transition-transform group-hover:rotate-12"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 15
                                            }, this),
                                            " [INIT_REPO]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/in/rumita-mandal-63a1a7293",
                                        target: "_blank",
                                        className: "flex items-center gap-3 p-4 rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] border-[#00ff41]/30 hover:bg-[#00ff41]/10 text-[#00ff41]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Linkedin, {
                                            className: "w-5 h-5 text-current"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/cv.pdf",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center gap-3 p-4 rounded-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] border-[#00ff41]/30 hover:bg-[#00ff41]/10 text-[#00ff41]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Download, {
                                            className: "w-5 h-5 text-current"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1,
                                    duration: 1
                                },
                                className: "absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    animate: {
                                        y: [
                                            0,
                                            8,
                                            0
                                        ]
                                    },
                                    transition: {
                                        repeat: Infinity,
                                        duration: 1.5,
                                        ease: "easeInOut"
                                    },
                                    className: "w-[1px] h-12 bg-gradient-to-b from-[#00ff41] to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about",
                        className: "scroll-mt-40 relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[60vh] gap-12 py-20 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: -100,
                                    rotateY: 45
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0,
                                    rotateY: 0
                                },
                                viewport: {
                                    once: false,
                                    margin: "-20%"
                                },
                                transition: {
                                    duration: 1,
                                    ease: "easeOut",
                                    type: "spring",
                                    bounce: 0.3
                                },
                                className: "flex flex-col items-start flex-1 order-2 lg:order-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-3 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `h-[2px] w-10 ${isDark ? 'bg-indigo-400' : 'bg-indigo-600'} rounded-full`
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-bold uppercase tracking-widest ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`,
                                                children: "About Me"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.05]",
                                        children: [
                                            "Driven by ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500",
                                                children: "Curiosity & Code."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 475,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 473,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xl sm:text-2xl ${textMuted} max-w-2xl leading-relaxed mb-6 font-medium`,
                                        children: "I believe in building software that not only functions perfectly but feels intuitive. Bringing ideas to life requires a deep understanding of core fundamentals paired with modern tools."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xl sm:text-2xl ${textMuted} max-w-2xl leading-relaxed font-medium`,
                                        children: "From crafting seamless user interfaces to integrating intelligent AI solutions behind the scenes, I love tackling the entire stack to solve real-world problems. Let's build something that matters."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.5,
                                    rotateX: 30,
                                    y: 150
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1,
                                    rotateX: 0,
                                    y: 0
                                },
                                viewport: {
                                    once: false,
                                    margin: "-20%"
                                },
                                transition: {
                                    duration: 1.2,
                                    bounce: 0.4,
                                    type: "spring"
                                },
                                className: "flex-1 order-1 lg:order-2 flex justify-center w-full [perspective:1000px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    whileHover: {
                                        rotateY: -10,
                                        rotateX: 5,
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95,
                                        rotateY: 0,
                                        rotateX: 0
                                    },
                                    drag: true,
                                    dragConstraints: {
                                        left: -20,
                                        right: 20,
                                        top: -20,
                                        bottom: 20
                                    },
                                    dragElastic: 0.4,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    },
                                    className: "relative cursor-grab active:cursor-grabbing w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-sm p-3 border border-dashed border-[#00ff41]/50 bg-black/50 backdrop-blur-md",
                                    style: {
                                        transformStyle: "preserve-3d"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 border border-[#00ff41] rounded-sm blur-[2px] opacity-70 block hidden hover:block transition-all duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 503,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full rounded-sm overflow-hidden border-2 border-[#00ff41]/80 relative bg-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:100%_4px] z-10 pointer-events-none mix-blend-overlay"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-[#00ff41]/10 z-10 pointer-events-none animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/pic.jpeg",
                                                    alt: "Rumita Mandal",
                                                    fill: true,
                                                    priority: true,
                                                    className: "object-cover transition-transform duration-700 ease-out hover:scale-110 grayscale contrast-125 brightness-125 mix-blend-luminosity",
                                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-6 -right-6 w-24 h-24 bg-[#00ff41] rounded-none blur-3xl opacity-20 transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 518,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-6 -left-6 w-32 h-32 bg-[#00ff41] rounded-none blur-3xl opacity-10 transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 519,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[100vw] relative left-1/2 -translate-x-1/2 -mt-20 mb-10 sm:-mt-10 sm:mb-20 overflow-hidden flex py-6 border-y border-[#00ff41]/30 opacity-80 backdrop-blur-sm bg-black/40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-max animate-marquee gap-8 sm:gap-16 items-center",
                            children: [
                                ...technologies,
                                ...technologies,
                                ...technologies,
                                ...technologies
                            ].map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "whitespace-nowrap text-xl sm:text-2xl font-black uppercase tracking-[0.3em] font-mono text-[#00ff41]/30 hover:text-[#00ff41] transition-colors cursor-default",
                                    children: [
                                        "/",
                                        tech,
                                        "/"
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "scroll-mt-40 -mt-16 sm:mt-0 font-mono",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
                            children: [
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPin, {
                                        className: "w-6 h-6 text-[#00ff41]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 23
                                    }, this),
                                    label: "Location",
                                    value: "India"
                                },
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Briefcase, {
                                        className: "w-6 h-6 text-[#00ff41]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 540,
                                        columnNumber: 23
                                    }, this),
                                    label: "Experience",
                                    value: "3+ Projects"
                                },
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Calendar, {
                                        className: "w-6 h-6 text-[#00ff41]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 541,
                                        columnNumber: 23
                                    }, this),
                                    label: "Graduating",
                                    value: "2027"
                                }
                            ].map((fact, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: false
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: i * 0.1
                                    },
                                    className: "flex items-center gap-4 p-6 sm:p-8 rounded-sm bg-black border border-[#00ff41]/30 shadow-[0_0_15px_rgba(0,255,65,0.05)] backdrop-blur-md group hover:border-[#00ff41]/80 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-sm border bg-[#00ff41]/5 border-[#00ff41]/20 group-hover:bg-[#00ff41]/10",
                                            children: fact.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 551,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold uppercase tracking-widest text-[#008f11] mb-1",
                                                    children: fact.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-black text-[#00ff41]",
                                                    children: fact.value
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, fact.label, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 537,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 536,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "projects",
                        className: "scroll-mt-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: false
                                },
                                className: "flex items-center gap-6 mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl sm:text-5xl font-black tracking-tight",
                                        children: "Featured Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 566,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex-1 h-[2px] ${isDark ? 'bg-white/10' : 'bg-black/10'}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 567,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-16 sm:gap-24 [perspective:1200px]",
                                children: projects.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 100,
                                            rotateX: 30,
                                            scale: 0.9
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0,
                                            rotateX: 0,
                                            scale: 1
                                        },
                                        whileHover: {
                                            rotateY: idx % 2 === 0 ? 5 : -5,
                                            scale: 1.03,
                                            z: 50
                                        },
                                        viewport: {
                                            once: false,
                                            margin: "-100px"
                                        },
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut",
                                            type: "spring",
                                            bounce: 0.4
                                        },
                                        className: `group relative overflow-hidden rounded-[2.5rem] ${cardBg} border ${cardBorder} ${cardHoverBg} transition-all duration-500 shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]`,
                                        style: {
                                            transformStyle: "preserve-3d"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-br ${project.color} blur-[120px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 583,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-gradient-to-tr ${project.color} blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 delay-100 pointer-events-none`
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 584,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8 sm:p-12 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex flex-col justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-flex items-center gap-3 mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `h-[2px] w-10 ${isDark ? 'bg-indigo-400' : 'bg-indigo-600'} rounded-full`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 589,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-sm font-bold uppercase tracking-widest ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`,
                                                                        children: project.date
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 590,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 588,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight",
                                                                children: project.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 593,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `${textMuted} text-lg sm:text-xl leading-relaxed mb-8 max-w-xl font-medium`,
                                                                children: project.summary
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 594,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-auto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: project.link,
                                                                    target: "_blank",
                                                                    className: `inline-flex items-center gap-2 pb-1 border-b-2 border-transparent hover:border-indigo-500 font-bold text-indigo-500 transition-colors group/link text-lg`,
                                                                    children: [
                                                                        "View Case Study ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLink, {
                                                                            className: "w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 598,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 597,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 596,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `md:w-5/12 p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between ${isDark ? 'bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-white/80 backdrop-blur-xl border border-zinc-200 shadow-xl'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2 text-sm font-bold mb-4 uppercase tracking-widest opacity-60",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkles, {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/page.tsx",
                                                                                lineNumber: 606,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            " Impact"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 605,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-base font-semibold leading-relaxed",
                                                                        children: project.impact
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 608,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 604,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-10 pt-8 border-t border-current opacity-90 flex flex-wrap gap-2.5",
                                                                children: project.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `px-4 py-2 rounded-xl text-xs font-bold tracking-wide shadow-sm transition-transform hover:scale-105 ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/5 text-black hover:bg-black/10'}`,
                                                                        children: t
                                                                    }, t, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 612,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 586,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, project.name, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 572,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "skills",
                        className: "scroll-mt-40 font-mono",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: false
                                },
                                className: "flex items-center gap-6 mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl sm:text-5xl font-black tracking-tight text-[#00ff41]",
                                        children: "Capability_Matrix"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 627,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 h-[1px] bg-gradient-to-r from-[#00ff41] to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 626,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8",
                                children: skillGroups.map((group, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: false
                                        },
                                        whileHover: {
                                            y: -8,
                                            scale: 1.02
                                        },
                                        transition: {
                                            duration: 0.4,
                                            delay: idx * 0.1
                                        },
                                        className: "group relative p-8 sm:p-10 rounded-sm bg-black border border-[#00ff41]/30 overflow-hidden transition-all duration-500 shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:shadow-[0_0_30px_rgba(0,255,65,0.15)] hover:border-[#00ff41]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-72 h-72 bg-[#00ff41]/5 blur-[80px] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none delay-75"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-10 inline-flex p-5 rounded-sm border backdrop-blur-md bg-[#00ff41]/5 border-[#00ff41]/20 text-[#00ff41] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10",
                                                children: group.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 644,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-black mb-8 relative z-10 tracking-tight text-[#00ff41] flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg opacity-50",
                                                        children: ">"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 649,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    group.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 648,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 relative z-10 sm:w-11/12",
                                                children: group.items.map((item, i)=>{
                                                    // Use a deterministic value based on the item string to prevent hydration mismatch errors
                                                    const percentage = 80 + (item.length * 7 + i * 13) % 20;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            x: -10
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            x: 0
                                                        },
                                                        transition: {
                                                            delay: 0.1 + i * 0.05
                                                        },
                                                        className: "flex flex-col gap-1 w-full group/bar mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between text-xs font-bold text-[#008f11] group-hover/bar:text-[#00ff41]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 664,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            percentage,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 665,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-2 bg-[#00ff41]/20 rounded-none overflow-hidden relative",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                                    initial: {
                                                                        width: 0
                                                                    },
                                                                    whileInView: {
                                                                        width: `${percentage}%`
                                                                    },
                                                                    transition: {
                                                                        duration: 1,
                                                                        ease: "easeOut",
                                                                        delay: 0.2 + i * 0.1
                                                                    },
                                                                    className: "absolute top-0 left-0 h-full bg-[#00ff41]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 668,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, item, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 651,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, group.title, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 633,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 631,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "scroll-mt-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: false
                                },
                                className: "flex items-center gap-6 mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl sm:text-5xl font-black tracking-tight flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraduationCap, {
                                                className: `w-10 h-10 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 688,
                                                columnNumber: 15
                                            }, this),
                                            " Education"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 687,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex-1 h-[2px] ${isDark ? 'bg-gradient-to-r from-white/10 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 690,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 686,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl space-y-6 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-[38px] top-6 bottom-6 w-1 rounded-full ${isDark ? 'bg-gradient-to-b from-indigo-500/50 via-purple-500/20 to-transparent' : 'bg-gradient-to-b from-indigo-300 via-purple-200 to-transparent'} hidden sm:block`
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 694,
                                        columnNumber: 13
                                    }, this),
                                    milestones.filter((m)=>m.type === 'edu').map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                            initial: {
                                                opacity: 0,
                                                x: -50,
                                                rotateY: -15
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0,
                                                rotateY: 0
                                            },
                                            viewport: {
                                                once: false,
                                                margin: "-50px"
                                            },
                                            whileHover: {
                                                scale: 1.02,
                                                rotateX: 2
                                            },
                                            transition: {
                                                duration: 0.6,
                                                type: "spring",
                                                bounce: 0.4,
                                                delay: idx * 0.1
                                            },
                                            className: `relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-[2rem] ${cardBg} border ${cardBorder} ${cardHoverBg} group cursor-default shadow-sm hover:shadow-2xl backdrop-blur-xl ${isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-white'} transition-all duration-500`,
                                            style: {
                                                transformStyle: "preserve-3d"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `hidden sm:flex z-10 items-center justify-center min-w-[3.5rem] w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-white/5 border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-md'} group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `transition-colors duration-300 ${isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-500'}`,
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow relative z-10 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: `text-xl sm:text-2xl font-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${isDark ? 'group-hover:from-blue-400 group-hover:to-cyan-400' : 'group-hover:from-blue-600 group-hover:to-cyan-600'} transition-all duration-300 tracking-tight leading-tight`,
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 718,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `sm:hidden inline-block px-3 py-1 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'} text-xs font-bold uppercase tracking-widest`,
                                                                    children: item.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 719,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-base sm:text-lg ${textMuted} font-semibold`,
                                                            children: item.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 723,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `hidden sm:block whitespace-nowrap px-5 py-2.5 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 text-blue-300' : 'bg-white/80 border-blue-100 text-blue-700 shadow-sm'} text-xs font-black uppercase tracking-widest backdrop-blur-md group-hover:border-blue-500/30 transition-colors`,
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 697,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 693,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 685,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "scroll-mt-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: false
                                },
                                className: "flex items-center gap-6 mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl sm:text-5xl font-black tracking-tight flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Award, {
                                                className: `w-10 h-10 ${isDark ? 'text-purple-400' : 'text-purple-600'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 738,
                                                columnNumber: 15
                                            }, this),
                                            " Certifications"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex-1 h-[2px] ${isDark ? 'bg-gradient-to-r from-white/10 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 740,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 736,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl space-y-6 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-[38px] top-6 bottom-6 w-1 rounded-full ${isDark ? 'bg-gradient-to-b from-purple-500/50 via-pink-500/20 to-transparent' : 'bg-gradient-to-b from-purple-300 via-pink-200 to-transparent'} hidden sm:block`
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 13
                                    }, this),
                                    milestones.filter((m)=>m.type === 'cert').map((item, idx)=>{
                                        const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `hidden sm:flex z-10 items-center justify-center min-w-[3.5rem] w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-white/5 border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'bg-gradient-to-br from-white to-purple-50 border-purple-200 shadow-md'} group-hover:scale-110 group-hover:-rotate-[15deg] transition-all duration-500`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `transition-colors duration-300 ${isDark ? 'text-purple-400 group-hover:text-purple-300' : 'text-purple-600 group-hover:text-purple-500'}`,
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 753,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow relative z-10 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: `text-xl sm:text-2xl font-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${isDark ? 'group-hover:from-purple-400 group-hover:to-pink-400' : 'group-hover:from-purple-600 group-hover:to-pink-600'} transition-all duration-300 tracking-tight leading-tight flex items-center gap-2`,
                                                                    children: [
                                                                        item.title,
                                                                        item.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLink, {
                                                                            className: "w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 762,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 760,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `sm:hidden inline-block px-3 py-1 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-700'} text-xs font-bold uppercase tracking-widest`,
                                                                    children: item.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 759,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-base sm:text-lg ${textMuted} font-semibold`,
                                                            children: item.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 768,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `hidden sm:block whitespace-nowrap px-5 py-2.5 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 text-purple-300' : 'bg-white/80 border-purple-100 text-purple-700 shadow-sm'} text-xs font-black uppercase tracking-widest backdrop-blur-md group-hover:border-purple-500/30 transition-colors`,
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                            href: item.link || "#",
                                            target: item.link ? "_blank" : undefined,
                                            rel: item.link ? "noopener noreferrer" : undefined,
                                            initial: {
                                                opacity: 0,
                                                x: -50,
                                                rotateY: 15
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0,
                                                rotateY: 0
                                            },
                                            viewport: {
                                                once: false,
                                                margin: "-50px"
                                            },
                                            whileHover: {
                                                scale: 1.02,
                                                rotateX: -2
                                            },
                                            transition: {
                                                duration: 0.6,
                                                type: "spring",
                                                bounce: 0.4,
                                                delay: idx * 0.1
                                            },
                                            className: `block relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-[2rem] ${cardBg} border ${cardBorder} ${cardHoverBg} group cursor-pointer shadow-sm hover:shadow-2xl backdrop-blur-xl ${isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-white'} transition-all duration-500`,
                                            style: {
                                                transformStyle: "preserve-3d"
                                            },
                                            children: CardContent
                                        }, idx, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 778,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 743,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "scroll-mt-40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: false
                                },
                                className: "flex items-center gap-6 mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl sm:text-5xl font-black tracking-tight flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sparkles, {
                                                className: `w-10 h-10 ${isDark ? 'text-amber-400' : 'text-amber-600'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 802,
                                                columnNumber: 15
                                            }, this),
                                            " Timeline Log"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 801,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex-1 h-[2px] ${isDark ? 'bg-gradient-to-r from-white/10 to-transparent' : 'bg-gradient-to-r from-black/10 to-transparent'}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 804,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 800,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl space-y-6 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute left-[38px] top-6 bottom-6 w-1 rounded-full ${isDark ? 'bg-gradient-to-b from-amber-500/50 via-emerald-500/20 to-transparent' : 'bg-gradient-to-b from-amber-300 via-emerald-200 to-transparent'} hidden sm:block`
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 808,
                                        columnNumber: 13
                                    }, this),
                                    milestones.filter((m)=>m.type !== 'edu' && m.type !== 'cert').map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                            initial: {
                                                opacity: 0,
                                                x: -50,
                                                rotateY: -10
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0,
                                                rotateY: 0
                                            },
                                            viewport: {
                                                once: false,
                                                margin: "-50px"
                                            },
                                            whileHover: {
                                                scale: 1.02,
                                                rotateX: 2
                                            },
                                            transition: {
                                                duration: 0.6,
                                                type: "spring",
                                                bounce: 0.4,
                                                delay: idx * 0.1
                                            },
                                            className: `relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-[2rem] ${cardBg} border ${cardBorder} ${cardHoverBg} group cursor-default shadow-sm hover:shadow-2xl backdrop-blur-xl ${isDark ? 'hover:bg-white/[0.04]' : 'hover:bg-white'} transition-all duration-500`,
                                            style: {
                                                transformStyle: "preserve-3d"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 rounded-[2rem] bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `hidden sm:flex z-10 items-center justify-center min-w-[3.5rem] w-14 h-14 rounded-[1.2rem] border ${isDark ? 'bg-white/5 border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'bg-gradient-to-br from-white to-emerald-50 border-emerald-200 shadow-md'} group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `transition-colors duration-300 ${isDark ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-emerald-600 group-hover:text-emerald-500'}`,
                                                        children: item.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 825,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-grow relative z-10 w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: `text-xl sm:text-2xl font-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${isDark ? 'group-hover:from-emerald-400 group-hover:to-teal-400' : 'group-hover:from-emerald-600 group-hover:to-teal-600'} transition-all duration-300 tracking-tight leading-tight`,
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 832,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `sm:hidden inline-block px-3 py-1 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-700'} text-xs font-bold uppercase tracking-widest`,
                                                                    children: item.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 833,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 831,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-base sm:text-lg ${textMuted} font-semibold`,
                                                            children: item.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `hidden sm:block whitespace-nowrap px-5 py-2.5 rounded-xl border ${isDark ? 'bg-black/40 border-white/10 text-emerald-300' : 'bg-white/80 border-emerald-100 text-emerald-700 shadow-sm'} text-xs font-black uppercase tracking-widest backdrop-blur-md group-hover:border-emerald-500/30 transition-colors`,
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 811,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 807,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 799,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "contact",
                        className: "scroll-mt-40 mb-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: false
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: `relative overflow-hidden rounded-[3rem] p-10 sm:p-16 md:p-24 text-center ${isDark ? 'bg-indigo-900/10 border border-indigo-500/20' : 'bg-indigo-50 border border-indigo-100'} shadow-2xl`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 857,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                    initial: {
                                        scale: 0.8,
                                        opacity: 0
                                    },
                                    whileInView: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.2,
                                        type: "spring"
                                    },
                                    className: "inline-flex items-center justify-center p-4 rounded-full mb-8 bg-indigo-500/10 text-indigo-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mail, {
                                        className: "w-8 h-8"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 864,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 858,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight",
                                    children: [
                                        "Let's Build Something ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500",
                                            children: "Amazing"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 866,
                                            columnNumber: 120
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 866,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-lg sm:text-xl ${textMuted} mb-12 max-w-2xl mx-auto font-medium`,
                                    children: "I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 867,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:rumita.mandal@example.com",
                                            className: `group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${isDark ? 'bg-indigo-500 text-white shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]' : 'bg-indigo-600 text-white shadow-xl hover:shadow-indigo-500/40'}`,
                                            children: [
                                                "Say Hello ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Send, {
                                                    className: "w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 872,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 871,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.linkedin.com/in/rumita-mandal-63a1a7293",
                                            target: "_blank",
                                            className: `group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 border ${isDark ? 'border-white/20 text-white bg-white/5 hover:bg-white/10' : 'border-black/10 text-black bg-black/5 hover:bg-black/10'}`,
                                            children: [
                                                "Connect ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {
                                                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 875,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 874,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 870,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 850,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 849,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: `border-t ${isDark ? 'border-white/10 bg-[#050505]/80' : 'border-zinc-200 bg-zinc-50/80'} py-12 px-6 sm:px-12 backdrop-blur-md relative z-10`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-3 h-3 rounded-full bg-emerald-500 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 888,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm font-bold tracking-wide uppercase ${textMuted}`,
                                    children: "Open to new opportunities"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 889,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 887,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:rumita.mandal@example.com",
                                    className: `text-sm font-bold flex items-center gap-2 ${textMuted} hover:${textMain} transition-colors group`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mail, {
                                            className: "w-5 h-5 group-hover:text-indigo-500 transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 894,
                                            columnNumber: 15
                                        }, this),
                                        " Say Hello"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 893,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/rumita-mandal",
                                    className: `p-3 rounded-full border ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'} transition-all hover:scale-110`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Github, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 896,
                                        columnNumber: 210
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 896,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/rumita-mandal-63a1a7293",
                                    className: `p-3 rounded-full border ${isDark ? 'border-white/10 hover:bg-white/10' : 'border-black/10 hover:bg-black/5'} transition-all hover:scale-110`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$siteca$2f$carumita$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Linkedin, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 897,
                                        columnNumber: 229
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 897,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 892,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 885,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 884,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(Home, "YJVOiw2tPUESMbJfAjnC2hc6MgE=", false, function() {
    return [
        useMotionValue,
        useMotionValue,
        useSpring,
        useSpring,
        useTransform,
        useTransform,
        useTransform,
        useTransform,
        useTransform,
        useTransform,
        useTransform
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D__0e74ceb0._.js.map