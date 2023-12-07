var $4zY4m$reactjsxruntime = require("react/jsx-runtime");
var $4zY4m$react = require("react");
var $4zY4m$adobereactspectrum = require("@adobe/react-spectrum");
var $4zY4m$adobegriffontoolkit = require("@adobe/griffon-toolkit");
var $4zY4m$ramda = require("ramda");
var $4zY4m$assurancepluginbridgeprovider = require("@assurance/plugin-bridge-provider");
var $4zY4m$adobegriffontoolkitcommon = require("@adobe/griffon-toolkit-common");
var $4zY4m$adobegriffontoolkitaepmobile = require("@adobe/griffon-toolkit-aep-mobile");
var $4zY4m$spectrumiconsworkflowDevices = require("@spectrum-icons/workflow/Devices");
var $4zY4m$spectrumiconsworkflowDevicePhone = require("@spectrum-icons/workflow/DevicePhone");
var $4zY4m$assurancecommonutils = require("@assurance/common-utils");
var $4zY4m$spectrumiconsworkflowFilter = require("@spectrum-icons/workflow/Filter");
var $4zY4m$spectrumiconsworkflowDataRefresh = require("@spectrum-icons/workflow/DataRefresh");
var $4zY4m$spectrumiconsworkflowDataRemove = require("@spectrum-icons/workflow/DataRemove");
var $4zY4m$spectrumiconsworkflowCloseCircle = require("@spectrum-icons/workflow/CloseCircle");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "PluginView", () => $c06462a666bb6979$export$2e2bcd8739ae039);
$parcel$export(module.exports, "TimelineToolbar", () => $eddf3b67891e56f4$export$2e2bcd8739ae039);
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/ /*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/ 


const $c06462a666bb6979$var$PluginView = ({ children: children })=>/*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.Flex), {
        direction: "column",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        children: [
            /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                width: "100%",
                height: 10,
                flexGrow: 5,
                overflow: "auto",
                children: children[0]
            }),
            /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                width: "100%",
                flexGrow: 0,
                flexShrink: 0,
                children: children[1]
            })
        ]
    });
var $c06462a666bb6979$export$2e2bcd8739ae039 = $c06462a666bb6979$var$PluginView;


/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/ 


/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/ 


/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/ 









const $f83c9e9bf9e1acff$var$getClientIcon = (type)=>type === "all" ? /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, ($parcel$interopDefault($4zY4m$spectrumiconsworkflowDevices))), {
        size: "S"
    }) : /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, ($parcel$interopDefault($4zY4m$spectrumiconsworkflowDevicePhone))), {
        size: "S"
    });
const $f83c9e9bf9e1acff$var$getType = (client)=>(0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoIos).isMatch(client) ? "ios" : (0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoAndroid).isMatch(client) ? "android" : null;
const $f83c9e9bf9e1acff$var$getIosLabel = (client)=>(0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoIos).getDeviceName(client) || (0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoIos).getModel(client) || (0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoIos).getDeviceType(client);
const $f83c9e9bf9e1acff$var$getAndroidLabel = (client)=>(0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoAndroid).getDeviceName(client) || (0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoAndroid).getModel(client) || (0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoAndroid).getDeviceType(client);
const $f83c9e9bf9e1acff$var$getLabel = (client)=>(0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoIos).isMatch(client) ? $f83c9e9bf9e1acff$var$getIosLabel(client) : (0, $4zY4m$adobegriffontoolkitaepmobile.clientInfoAndroid).isMatch(client) ? $f83c9e9bf9e1acff$var$getAndroidLabel(client) : null;
const $f83c9e9bf9e1acff$var$prepareClientForUI = (client)=>({
        clientId: (0, $4zY4m$adobegriffontoolkitcommon.event).getClientId(client),
        label: $f83c9e9bf9e1acff$var$getLabel(client),
        type: $f83c9e9bf9e1acff$var$getType(client),
        timestamp: client.timestamp
    });
const $f83c9e9bf9e1acff$var$ClientPicker = ()=>{
    const clients = (0, $4zY4m$assurancepluginbridgeprovider.useClients)();
    const selectedClients = (0, $4zY4m$assurancepluginbridgeprovider.useSelectedClients)();
    const filters = (0, $4zY4m$assurancepluginbridgeprovider.useNavigationFilters)();
    const path = (0, $4zY4m$assurancepluginbridgeprovider.useNavigationPath)();
    const prepared = (0, $4zY4m$react.useMemo)(()=>clients.map($f83c9e9bf9e1acff$var$prepareClientForUI), [
        clients
    ]);
    const mapSelected = (0, $4zY4m$react.useMemo)(()=>selectedClients.map((id)=>$4zY4m$ramda.find($4zY4m$ramda.propEq(id, "clientId"), prepared)), [
        prepared,
        selectedClients
    ]);
    if (clients.length === 0) return /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)("span", {
        children: "Unknown client"
    });
    if (clients.length === 1) return /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.Flex), {
        gap: "size-100",
        children: [
            $f83c9e9bf9e1acff$var$getClientIcon(mapSelected[0].type),
            /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Text), {
                children: mapSelected[0].label
            })
        ]
    });
    const options = [
        {
            clientId: "all",
            label: "All Clients",
            type: "all"
        },
        ...prepared
    ];
    return /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Picker), {
        "aria-label": "Client",
        labelPosition: "side",
        isQuiet: true,
        items: options,
        selectedKey: selectedClients.length === clients.length ? "all" : mapSelected[0].clientId,
        onSelectionChange: (selected)=>{
            const output = {
                ...filters,
                clients: selected === "all" ? undefined : (0, $4zY4m$adobegriffontoolkitcommon.event).makeClientFilter([
                    selected
                ])
            };
            const newPath = `${path}#${(0, $4zY4m$adobegriffontoolkit.filterToHash)(output)}`;
            (0, $4zY4m$assurancepluginbridgeprovider.navigateTo)(newPath);
        },
        children: (item)=>/*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.Item), {
                textValue: item.label,
                children: [
                    $f83c9e9bf9e1acff$var$getClientIcon(item.type),
                    /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Text), {
                        children: item.label
                    })
                ]
            }, item.clientId)
    });
};
var $f83c9e9bf9e1acff$export$2e2bcd8739ae039 = $f83c9e9bf9e1acff$var$ClientPicker;


/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/ 




const $9b439e8446d60be9$var$makeLabel = (e)=>e ? e.timelineDetails || (0, $4zY4m$assurancecommonutils.chooseEventLabel)(e) : "";
const $9b439e8446d60be9$var$SelectedEventPicker = ()=>{
    const selected = (0, $4zY4m$assurancepluginbridgeprovider.useSelectedEvents)();
    if (!selected) return null;
    // TODO: Hightlights
    return /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Flex), {
        gap: "size-200",
        children: selected.length > 1 ? /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Text), {
            children: "Multiple selected events"
        }) : /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Text), {
            children: $9b439e8446d60be9$var$makeLabel(selected[0])
        })
    });
};
var $9b439e8446d60be9$export$2e2bcd8739ae039 = $9b439e8446d60be9$var$SelectedEventPicker;


/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/ 






const $e96c2b00ed001cf6$var$FilterButtons = ()=>{
    const selected = (0, $4zY4m$assurancepluginbridgeprovider.useSelectedEvents)();
    const moreActions = [
        {
            label: "Clear session",
            action: "clearSession",
            icon: (0, ($parcel$interopDefault($4zY4m$spectrumiconsworkflowDataRemove)))
        },
        {
            label: "Restore session",
            action: "restoreSession",
            icon: (0, ($parcel$interopDefault($4zY4m$spectrumiconsworkflowDataRefresh)))
        }
    ];
    if (selected?.length) {
        moreActions.push({
            label: "Toggle hidden",
            action: "hide"
        });
        moreActions.push({
            label: "Toggle flag",
            action: "flag"
        });
    }
    return /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Flex), {
        gap: "size-100",
        alignItems: "center",
        children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.MenuTrigger), {
            children: [
                /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.ActionButton), {
                    isQuiet: true,
                    "aria-label": "Filter menu",
                    children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, ($parcel$interopDefault($4zY4m$spectrumiconsworkflowFilter))), {})
                }),
                /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Menu), {
                    items: moreActions,
                    children: (item)=>{
                        const renderedIcon = item.icon ? /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)(item.icon, {}) : null;
                        return /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.Item), {
                            children: [
                                renderedIcon,
                                /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Text), {
                                    children: item.label
                                })
                            ]
                        }, item.action);
                    }
                })
            ]
        })
    });
};
var $e96c2b00ed001cf6$export$2e2bcd8739ae039 = $e96c2b00ed001cf6$var$FilterButtons;


const $7a7aa7729baf3826$var$FilterBar = ()=>/*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.Flex), {
        direction: "row",
        marginStart: "size-200",
        marginEnd: 9,
        children: [
            /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                width: 200,
                flexGrow: 3,
                children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $f83c9e9bf9e1acff$export$2e2bcd8739ae039), {})
            }),
            /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $9b439e8446d60be9$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Flex), {
                width: 200,
                flexGrow: 3,
                justifyContent: "right",
                children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $e96c2b00ed001cf6$export$2e2bcd8739ae039), {})
            })
        ]
    });
var $7a7aa7729baf3826$export$2e2bcd8739ae039 = $7a7aa7729baf3826$var$FilterBar;


/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/ 




/*
 * ************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *   Copyright 2023 Adobe Systems Incorporated
 *   All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ************************************************************************
 */ 
function $f379ffcb2820f2d5$export$42c02f33970a2afa() {
    const [size, setSize] = (0, $4zY4m$react.useState)([
        0,
        0
    ]);
    (0, $4zY4m$react.useLayoutEffect)(()=>{
        function updateSize() {
            setSize([
                window.innerWidth,
                window.innerHeight
            ]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return ()=>window.removeEventListener("resize", updateSize);
    }, []);
    return size;
}
function $f379ffcb2820f2d5$export$39656943dfb35acc(effect, element, wait = 100) {
    (0, $4zY4m$react.useRef)(element);
    let throttleTimeout = null;
    const callBack = ()=>{
        effect({
            currPos: element.current.scrollLeft
        });
        throttleTimeout = null;
    };
    (0, $4zY4m$react.useLayoutEffect)(()=>{
        const handleScroll = ()=>{
            throttleTimeout = throttleTimeout || setTimeout(callBack, wait);
        };
        element.current.addEventListener("scroll", handleScroll);
        return ()=>element.current.removeEventListener("scroll", handleScroll);
    }, []);
}
function $f379ffcb2820f2d5$export$48144e1cd67d05bc(position, element, outer) {
    (0, $4zY4m$react.useRef)(element);
    (0, $4zY4m$react.useRef)(outer);
    (0, $4zY4m$react.useLayoutEffect)(()=>{
        // if position isn't visible, scroll to it
        const outerWidth = outer.current.clientWidth;
        const currentScroll = element.current.scrollLeft;
        if (position < element.current.scrollLeft || position > currentScroll + outerWidth) // eslint-disable-next-line no-param-reassign
        element.current.scrollLeft = position - outerWidth / 2;
    }, [
        position
    ]);
}


/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/ 



const $49c03c575cb1bdf5$var$BOX_HEIGHT = 16;
const $49c03c575cb1bdf5$var$SCRUBBER_LINE_HEIGHT = 24;
const $49c03c575cb1bdf5$var$makeLabel = (e)=>e ? e.timelineDetails || (0, $4zY4m$assurancecommonutils.chooseEventLabel)(e) : "";
const $49c03c575cb1bdf5$var$ScrubberLine = ({ highlightColor: highlightColor, onPress: onPress, event: event, isSelected: isSelected, eventSize: eventSize, index: index })=>/*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.View), {
        position: "absolute",
        left: eventSize * index,
        width: eventSize,
        height: $49c03c575cb1bdf5$var$SCRUBBER_LINE_HEIGHT + 4,
        top: 0,
        children: [
            !((index + 1) % 5) && /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                "data-testid": "scrubber-tick",
                backgroundColor: "gray-400",
                position: "absolute",
                height: $49c03c575cb1bdf5$var$SCRUBBER_LINE_HEIGHT,
                top: 12,
                width: 2,
                left: "calc(50% - 1px)"
            }),
            !((index + 1) % 25) && /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                position: "absolute",
                top: 0,
                left: "50%",
                UNSAFE_style: {
                    fontSize: "8px",
                    transform: "translateX(-50%)"
                },
                children: index + 1
            }),
            /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                marginTop: 16,
                children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.TooltipTrigger), {
                    delay: 50,
                    closeDelay: 0,
                    children: [
                        /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.ActionButton), {
                            onPress: onPress,
                            isQuiet: true,
                            width: "100%",
                            minWidth: "100%",
                            height: $49c03c575cb1bdf5$var$BOX_HEIGHT,
                            UNSAFE_style: {
                                border: "none"
                            },
                            children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                                backgroundColor: isSelected ? "blue-400" : highlightColor || "gray-300",
                                position: "absolute",
                                height: $49c03c575cb1bdf5$var$BOX_HEIGHT,
                                width: "100%",
                                children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                                    height: $49c03c575cb1bdf5$var$BOX_HEIGHT,
                                    width: "100%",
                                    backgroundColor: "gray-50",
                                    borderColor: "gray-400",
                                    borderWidth: "thin",
                                    UNSAFE_style: {
                                        opacity: .2,
                                        fontWeight: "bold",
                                        fontSize: 11,
                                        userSelect: "none"
                                    },
                                    children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.Flex), {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        children: event.hidden ? "X" : event.important ? "!" : ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.Tooltip), {
                            children: [
                                /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)("div", {
                                    children: $49c03c575cb1bdf5$var$makeLabel(event)
                                }),
                                /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)("div", {
                                    style: {
                                        fontSize: 11
                                    },
                                    children: (0, $4zY4m$assurancecommonutils.getTimestampText)(event.timestamp)
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
var $49c03c575cb1bdf5$export$2e2bcd8739ae039 = $49c03c575cb1bdf5$var$ScrubberLine;



const $bde19990bc947e9a$var$clamp = (number, min, max)=>Math.min(Math.max(number, min), max);
const $bde19990bc947e9a$var$EVENT_SIZE = 10;
const $bde19990bc947e9a$var$POPOVER_WIDTH = 250;
const $bde19990bc947e9a$var$POPOVER_HALF = $bde19990bc947e9a$var$POPOVER_WIDTH * 0.5;
const $bde19990bc947e9a$var$ARROW_PAD = 2;
const $bde19990bc947e9a$var$EXTRA_LINES = 50;
const $bde19990bc947e9a$var$BAR_HEIGHT = 56;
const $bde19990bc947e9a$var$getSelectedIndex = (selected, events)=>$4zY4m$ramda.findIndex((check)=>check && check.uuid === (selected || {}).uuid, events || []) || 0;
const $bde19990bc947e9a$var$Timeline = ()=>{
    const [width, setWidth] = (0, $4zY4m$react.useState)(0);
    const [barPosition, setBarPosition] = (0, $4zY4m$react.useState)(0);
    const outer = (0, $4zY4m$react.useRef)(null);
    const bar = (0, $4zY4m$react.useRef)(null);
    const events = (0, $4zY4m$assurancepluginbridgeprovider.useFilteredEvents)();
    const selected = (0, $4zY4m$assurancepluginbridgeprovider.useSelectedEvents)();
    (0, $f379ffcb2820f2d5$export$42c02f33970a2afa)();
    (0, $4zY4m$react.useEffect)(()=>{
        setWidth(outer.current?.clientWidth);
    }, [
        outer.current
    ]);
    (0, $f379ffcb2820f2d5$export$39656943dfb35acc)(({ currPos: currPos })=>{
        setBarPosition(currPos);
    }, bar);
    const eventSize = $bde19990bc947e9a$var$EVENT_SIZE;
    const autoScrollPos = (0, $4zY4m$react.useMemo)(()=>{
        let pos = 0;
        if (selected && selected[0]) {
            const firstIndex = $bde19990bc947e9a$var$getSelectedIndex(selected[0], events);
            pos = firstIndex * eventSize;
            // with two events or more, center between first and second event
            if (selected.length > 1) {
                const secondIndex = $bde19990bc947e9a$var$getSelectedIndex(selected[1], events);
                const secondPos = secondIndex * eventSize;
                pos = (pos < secondPos ? secondPos - pos : pos - secondPos) / 2 + pos;
            }
            return pos;
        }
        return eventSize * events.length;
    }, [
        events,
        selected
    ]);
    (0, $f379ffcb2820f2d5$export$48144e1cd67d05bc)(autoScrollPos, bar, outer);
    const isSelected = (e)=>e && e.uuid && $4zY4m$ramda.findIndex((row)=>row && row.uuid === e.uuid, selected || []) >= 0;
    const isVisible = (index)=>{
        const pos = index * eventSize;
        const padding = $bde19990bc947e9a$var$EXTRA_LINES * eventSize;
        return barPosition + width + padding > pos && barPosition - padding < pos;
    };
    const scrubberLines = (0, $4zY4m$react.useMemo)(()=>events.map((e, index)=>isVisible(index) && /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $49c03c575cb1bdf5$export$2e2bcd8739ae039), {
                index: index,
                highlightColor: e.highlight,
                event: e,
                onPress: ()=>{
                    (0, $4zY4m$assurancepluginbridgeprovider.selectEvents)([
                        e.uuid
                    ]);
                },
                isSelected: isSelected(e),
                eventSize: eventSize
            }, e.uuid)), [
        events,
        barPosition,
        width,
        selected
    ]);
    return /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.Flex), {
        gap: "size-50",
        marginEnd: 10,
        children: [
            /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)("div", {
                ref: outer,
                style: {
                    height: $bde19990bc947e9a$var$BAR_HEIGHT,
                    pointerEvents: "none",
                    width: 30,
                    flexGrow: 5,
                    position: "relative"
                },
                children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)("div", {
                    style: {
                        position: "absolute",
                        width: "100%",
                        height: $bde19990bc947e9a$var$BAR_HEIGHT - 2,
                        overflowX: "scroll",
                        overflowY: "hidden",
                        pointerEvents: "auto"
                    },
                    ref: bar,
                    children: events?.length && /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                        width: events.length * eventSize,
                        children: scrubberLines
                    })
                })
            }),
            selected?.length ? /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
                marginTop: 8,
                children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.ActionButton), {
                    isQuiet: true,
                    onPress: ()=>{
                        (0, $4zY4m$assurancepluginbridgeprovider.selectEvents)([]);
                    },
                    children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, ($parcel$interopDefault($4zY4m$spectrumiconsworkflowCloseCircle))), {
                        size: "S"
                    })
                })
            }) : null
        ]
    });
};
var $bde19990bc947e9a$export$2e2bcd8739ae039 = $bde19990bc947e9a$var$Timeline;


const $eddf3b67891e56f4$var$TimelineToolbar = ()=>{
    return /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $4zY4m$adobereactspectrum.View), {
        borderTopWidth: "thin",
        borderTopColor: "mid",
        children: /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsxs)((0, $4zY4m$adobereactspectrum.Flex), {
            direction: "column",
            gap: "size-100",
            marginTop: "size-100",
            children: [
                /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $7a7aa7729baf3826$export$2e2bcd8739ae039), {}),
                /*#__PURE__*/ (0, $4zY4m$reactjsxruntime.jsx)((0, $bde19990bc947e9a$export$2e2bcd8739ae039), {})
            ]
        })
    });
};
var $eddf3b67891e56f4$export$2e2bcd8739ae039 = $eddf3b67891e56f4$var$TimelineToolbar;




//# sourceMappingURL=index.js.map
