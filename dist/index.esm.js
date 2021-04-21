import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, flexbox, layout } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return React.createElement("img", __assign({ width: "32", height: "32", src: "/images/dry/logo.png" }, props));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/dry/DRYCAKE-logso-p.png" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), flexbox, space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled(GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$A, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 500 500" }, props),
        React.createElement("image", { width: "96", height: "96", href: "/images/dry/DRYCAKE-logso-p.png" })));
};
var Container$1 = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked },
        React.createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React.createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: null,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "#4f2c16 0px 0px 0px 1px, #4f2c1694 0px 0px 0px 4px",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$k, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 591 591" }, props),
        React.createElement("g", { id: "#343434ff" },
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 270.62 36.82 C 297.52 34.65 324.78 36.32 351.07 42.55 C 408.21 55.76 460.19 89.71 495.47 136.53 C 517.98 166.11 533.82 200.72 541.48 237.10 C 550.59 280.22 548.41 325.73 534.89 367.71 C 524.63 399.93 507.71 429.98 485.66 455.61 C 460.96 484.46 429.67 507.62 394.88 522.85 C 361.66 537.44 325.25 544.78 288.97 544.01 C 246.14 543.68 203.53 531.86 166.42 510.54 C 127.32 488.14 94.38 455.15 72.07 416.01 C 52.19 381.37 40.78 341.93 39.00 302.04 C 36.86 258.08 46.31 213.59 66.42 174.42 C 90.45 127.26 129.60 87.94 176.76 63.86 C 205.87 48.80 237.97 39.64 270.62 36.82 M 296.73 157.56 C 294.74 159.67 292.69 161.71 290.63 163.75 C 287.30 167.01 284.06 170.36 280.78 173.66 C 279.05 175.31 277.36 177.00 275.69 178.71 C 273.10 181.24 270.56 183.82 268.04 186.42 C 262.04 192.30 256.08 198.23 250.21 204.23 C 244.84 209.64 246.94 219.98 254.08 222.75 C 259.20 225.22 265.17 222.91 268.71 218.83 L 268.69 218.56 C 271.36 216.02 273.97 213.41 276.62 210.84 L 276.59 210.66 C 278.35 209.04 280.06 207.36 281.72 205.63 C 284.70 208.49 287.55 211.48 290.52 214.37 C 292.57 216.43 294.62 218.50 296.69 220.55 C 298.02 221.88 299.35 223.20 300.70 224.50 C 300.80 234.33 300.73 244.15 300.75 253.97 C 300.83 259.93 298.73 265.66 295.66 270.69 C 292.61 274.82 288.80 278.38 284.28 280.87 C 282.48 281.60 280.69 282.33 278.89 283.05 C 276.80 283.46 274.70 283.85 272.60 284.23 C 269.01 284.26 265.43 284.29 261.84 284.26 C 265.36 288.38 268.59 292.74 271.57 297.27 C 274.33 301.73 276.57 306.48 278.82 311.21 C 280.59 316.23 282.15 321.31 283.61 326.43 C 285.68 337.81 286.26 349.51 284.10 360.94 C 288.03 360.97 291.96 361.01 295.90 361.00 C 299.65 360.98 303.41 361.01 307.16 360.99 C 312.38 360.98 317.59 361.02 322.81 360.99 C 326.00 360.97 329.19 360.99 332.38 361.00 C 334.85 338.18 349.44 317.27 369.94 306.97 C 372.52 305.79 375.13 304.67 377.80 303.71 L 377.80 303.55 C 380.47 302.80 383.14 302.04 385.83 301.34 C 388.54 300.85 391.26 300.43 393.99 300.06 C 396.95 299.86 399.91 299.71 402.88 299.76 C 405.30 300.01 407.73 300.22 410.16 300.45 C 413.29 301.03 416.42 301.67 419.52 302.41 L 419.51 302.56 C 426.37 304.48 432.82 307.62 438.76 311.52 C 438.73 289.36 438.76 267.20 438.75 245.04 C 438.71 239.62 439.22 234.01 437.32 228.81 C 434.60 220.31 427.94 213.41 419.81 209.88 C 416.69 208.79 413.48 208.00 410.20 207.68 C 407.78 207.75 405.37 207.76 402.97 207.76 C 399.96 207.75 396.95 207.74 393.95 207.75 C 391.27 207.75 388.58 207.75 385.90 207.75 C 383.22 207.75 380.53 207.75 377.85 207.75 C 375.22 207.75 372.58 207.75 369.95 207.75 C 354.41 207.75 338.88 207.75 323.34 207.75 C 321.20 207.74 319.07 207.75 316.93 207.76 C 313.76 204.66 310.63 201.51 307.49 198.37 C 304.43 195.27 301.33 192.21 298.24 189.13 C 303.19 184.13 308.24 179.23 313.17 174.22 C 317.48 169.93 317.36 162.20 313.07 157.95 C 308.80 153.45 301.27 153.50 296.73 157.56 M 160.38 223.09 L 160.41 224.04 L 160.37 222.97 C 157.48 223.91 154.55 225.04 152.38 227.24 C 146.70 232.48 146.09 242.11 150.93 248.09 C 153.25 251.21 156.92 252.88 160.59 253.82 C 162.13 253.78 163.67 253.74 165.22 253.73 C 166.59 253.73 167.97 253.73 169.34 253.74 C 172.99 253.74 176.65 253.78 180.30 253.74 L 179.87 253.82 C 190.60 253.61 201.34 253.91 212.08 253.64 C 213.25 253.74 214.43 253.79 215.62 253.79 C 217.14 253.76 218.66 253.75 220.18 253.75 C 222.02 253.75 223.86 253.73 225.70 253.73 C 227.05 253.74 228.41 253.75 229.78 253.77 C 233.14 253.77 236.50 253.75 239.87 253.72 C 239.79 245.47 236.32 237.48 230.56 231.62 C 229.12 230.48 227.68 229.36 226.22 228.27 L 226.24 228.13 C 224.23 227.03 222.22 225.97 220.18 224.94 C 218.66 224.52 217.14 224.11 215.62 223.72 L 215.62 223.59 C 213.16 223.25 210.68 223.01 208.20 222.95 C 201.07 223.08 193.95 222.96 186.83 223.00 C 184.46 223.00 182.09 223.01 179.72 223.00 C 176.26 222.99 172.80 223.01 169.33 223.02 C 167.96 223.01 166.58 223.00 165.21 222.99 C 163.60 223.02 161.99 223.05 160.38 223.09 M 182.97 270.29 L 182.61 270.98 L 182.19 270.56 C 179.09 270.34 175.95 271.34 173.01 272.32 L 172.71 273.00 L 172.27 272.66 C 170.07 272.93 168.00 273.80 165.91 274.50 C 163.53 275.49 161.17 276.55 158.84 277.66 C 155.97 279.19 153.19 280.89 150.45 282.66 C 147.34 284.78 144.42 287.17 141.65 289.71 C 138.81 292.47 136.05 295.31 133.60 298.42 C 121.60 313.36 115.64 332.97 117.25 352.06 C 118.38 367.42 124.29 382.41 134.06 394.32 C 136.36 397.14 138.83 399.82 141.48 402.32 C 143.93 404.51 146.46 406.62 149.12 408.55 C 152.03 410.56 155.03 412.42 158.14 414.11 C 161.46 415.65 164.69 417.50 168.30 418.29 L 168.66 417.98 L 169.00 418.66 C 172.12 419.98 175.49 420.57 178.77 421.36 C 186.08 422.69 193.55 423.13 200.96 422.47 C 206.19 421.96 211.33 420.84 216.39 419.43 C 220.44 418.14 224.34 416.47 228.21 414.73 L 228.20 414.62 C 230.26 413.56 232.27 412.42 234.28 411.26 C 237.08 409.43 239.81 407.49 242.41 405.38 C 244.97 403.11 247.74 401.01 249.84 398.28 C 252.28 395.88 254.35 393.14 256.36 390.38 C 263.91 379.71 268.72 367.08 269.99 354.06 C 271.95 335.72 267.08 316.67 256.30 301.68 C 254.51 299.21 252.61 296.82 250.57 294.56 C 247.98 291.75 245.24 289.08 242.30 286.65 C 239.89 284.77 237.45 282.93 234.89 281.28 C 230.88 278.83 226.72 276.60 222.35 274.85 C 220.58 274.20 218.82 273.56 217.06 272.94 C 211.77 271.32 206.34 270.20 200.84 269.65 C 194.90 269.56 188.80 268.97 182.97 270.29 M 392.81 315.32 C 390.15 315.83 387.51 316.41 384.89 317.06 C 382.54 317.87 380.22 318.76 377.93 319.72 C 374.98 321.20 372.12 322.85 369.36 324.65 C 366.98 326.40 364.75 328.33 362.68 330.44 C 361.34 331.81 360.02 333.21 358.72 334.62 C 351.38 343.73 346.97 355.20 346.73 366.93 C 346.25 379.70 350.59 392.55 358.68 402.44 C 360.09 404.16 361.61 405.78 363.27 407.25 L 363.27 407.60 C 365.31 409.28 367.36 410.95 369.51 412.51 L 369.49 412.68 C 372.22 414.34 374.96 415.97 377.81 417.42 C 380.23 418.40 382.67 419.35 385.15 420.18 C 387.92 420.86 390.70 421.48 393.51 421.96 C 401.11 422.75 408.83 422.15 416.19 420.04 C 418.57 419.19 420.93 418.27 423.28 417.30 C 425.69 416.04 428.06 414.70 430.39 413.28 C 433.58 411.02 436.55 408.47 439.30 405.70 C 441.14 403.70 442.86 401.58 444.50 399.42 C 457.34 381.44 457.34 355.58 444.42 337.65 C 442.82 335.50 441.12 333.42 439.31 331.45 C 436.54 328.67 433.58 326.10 430.36 323.86 C 428.02 322.43 425.64 321.07 423.21 319.81 C 421.22 319.01 419.23 318.22 417.22 317.48 C 409.36 314.95 400.98 314.33 392.81 315.32 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 182.96 301.55 C 188.70 300.16 194.69 299.87 200.53 300.76 C 206.19 301.64 211.67 303.58 216.64 306.43 C 218.56 307.57 220.41 308.85 222.19 310.23 C 227.09 314.13 231.15 319.05 234.15 324.55 C 241.63 338.34 241.21 355.82 233.19 369.29 C 231.47 372.12 229.48 374.80 227.22 377.23 C 224.01 380.64 220.31 383.59 216.25 385.93 C 211.50 388.63 206.24 390.37 200.87 391.35 C 193.64 392.39 186.16 391.84 179.22 389.55 C 175.93 388.39 172.77 386.88 169.78 385.11 C 165.62 382.44 161.74 379.28 158.58 375.45 C 154.68 370.70 151.70 365.22 149.81 359.38 C 146.91 348.98 147.35 337.62 151.76 327.70 C 153.75 323.34 156.32 319.22 159.52 315.64 C 161.61 313.37 163.88 311.27 166.33 309.39 C 168.68 307.68 171.16 306.14 173.76 304.82 C 176.71 303.44 179.80 302.34 182.96 301.55 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 393.64 346.75 C 401.66 344.19 410.72 346.60 416.68 352.45 C 419.09 355.12 420.95 358.25 422.33 361.57 C 423.44 366.13 423.47 370.85 422.37 375.42 C 420.90 379.20 418.76 382.74 415.77 385.51 C 409.74 390.92 400.94 392.87 393.22 390.31 C 390.54 389.29 388.03 387.85 385.74 386.14 C 382.53 383.23 380.07 379.56 378.53 375.52 C 377.35 370.91 377.37 366.13 378.55 361.52 C 380.09 357.70 382.36 354.18 385.39 351.39 C 387.82 349.34 390.65 347.80 393.64 346.75 Z" })),
        React.createElement("g", { id: "#f6e48aff" },
            React.createElement("path", { fill: "#f6e48a", opacity: "1.00", d: " M 296.73 157.56 C 301.27 153.50 308.80 153.45 313.07 157.95 C 317.36 162.20 317.48 169.93 313.17 174.22 C 308.24 179.23 303.19 184.13 298.24 189.13 C 301.33 192.21 304.43 195.27 307.49 198.37 C 306.98 209.89 307.28 221.43 307.24 232.96 C 307.19 275.64 307.33 318.32 307.16 360.99 C 303.41 361.01 299.65 360.98 295.90 361.00 C 295.80 337.34 295.83 313.68 295.78 290.02 C 295.94 283.57 296.32 277.12 295.66 270.69 C 298.73 265.66 300.83 259.93 300.75 253.97 C 300.73 244.15 300.80 234.33 300.70 224.50 C 299.35 223.20 298.02 221.88 296.69 220.55 C 297.70 208.73 296.94 196.87 297.20 185.03 C 296.99 175.87 297.55 166.70 296.73 157.56 Z" })),
        React.createElement("g", { id: "#f6df7cff" },
            React.createElement("path", { fill: "#f6df7c", opacity: "1.00", d: " M 290.63 163.75 C 292.69 161.71 294.74 159.67 296.73 157.56 C 297.55 166.70 296.99 175.87 297.20 185.03 C 296.94 196.87 297.70 208.73 296.69 220.55 C 294.62 218.50 292.57 216.43 290.52 214.37 C 290.96 197.51 290.80 180.62 290.63 163.75 Z" })),
        React.createElement("g", { id: "#ebcc6fff" },
            React.createElement("path", { fill: "#ebcc6f", opacity: "1.00", d: " M 280.78 173.66 C 284.06 170.36 287.30 167.01 290.63 163.75 C 290.80 180.62 290.96 197.51 290.52 214.37 C 287.55 211.48 284.70 208.49 281.72 205.63 C 280.67 194.99 282.08 184.28 280.78 173.66 Z" })),
        React.createElement("g", { id: "#deb863ff" },
            React.createElement("path", { fill: "#deb863", opacity: "1.00", d: " M 275.69 178.71 C 277.36 177.00 279.05 175.31 280.78 173.66 C 282.08 184.28 280.67 194.99 281.72 205.63 C 280.06 207.36 278.35 209.04 276.59 210.66 C 274.99 200.08 276.33 189.35 275.69 178.71 Z" })),
        React.createElement("g", { id: "#d5aa5aff" },
            React.createElement("path", { fill: "#d5aa5a", opacity: "1.00", d: " M 268.04 186.42 C 270.56 183.82 273.10 181.24 275.69 178.71 C 276.33 189.35 274.99 200.08 276.59 210.66 L 276.62 210.84 C 273.97 213.41 271.36 216.02 268.69 218.56 C 267.79 207.87 268.72 197.12 268.04 186.42 Z" })),
        React.createElement("g", { id: "#cb9b51ff" },
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 250.21 204.23 C 256.08 198.23 262.04 192.30 268.04 186.42 C 268.72 197.12 267.79 207.87 268.69 218.56 L 268.71 218.83 C 265.17 222.91 259.20 225.22 254.08 222.75 C 246.94 219.98 244.84 209.64 250.21 204.23 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 419.81 209.88 C 427.94 213.41 434.60 220.31 437.32 228.81 C 439.22 234.01 438.71 239.62 438.75 245.04 C 438.76 267.20 438.73 289.36 438.76 311.52 C 432.82 307.62 426.37 304.48 419.51 302.56 L 419.52 302.41 C 420.04 271.57 419.47 240.72 419.81 209.88 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 152.38 227.24 C 154.55 225.04 157.48 223.91 160.37 222.97 L 160.41 224.04 C 160.74 233.96 160.45 243.89 160.59 253.82 C 156.92 252.88 153.25 251.21 150.93 248.09 C 146.09 242.11 146.70 232.48 152.38 227.24 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 230.56 231.62 C 236.32 237.48 239.79 245.47 239.87 253.72 C 236.50 253.75 233.14 253.77 229.78 253.77 C 230.58 246.40 230.09 238.99 230.56 231.62 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 117.25 352.06 C 115.64 332.97 121.60 313.36 133.60 298.42 C 133.99 301.26 134.35 304.13 134.39 307.01 C 134.31 328.65 134.42 350.30 134.35 371.95 C 134.29 379.40 134.59 386.87 134.06 394.32 C 124.29 382.41 118.38 367.42 117.25 352.06 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 256.30 301.68 C 267.08 316.67 271.95 335.72 269.99 354.06 C 268.72 367.08 263.91 379.71 256.36 390.38 C 255.59 382.61 256.28 374.80 255.86 367.01 C 256.46 351.00 255.46 335.00 255.96 319.00 C 255.98 313.22 255.62 307.43 256.30 301.68 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 346.73 366.93 C 346.97 355.20 351.38 343.73 358.72 334.62 C 359.79 348.72 358.99 362.88 359.25 377.01 C 359.10 385.49 359.69 394.00 358.68 402.44 C 350.59 392.55 346.25 379.70 346.73 366.93 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 444.42 337.65 C 457.34 355.58 457.34 381.44 444.50 399.42 C 443.23 389.33 444.04 379.15 443.82 369.01 C 443.98 358.56 443.33 348.07 444.42 337.65 Z" })),
        React.createElement("g", { id: "#f6eb9fff" },
            React.createElement("path", { fill: "#f6eb9f", opacity: "1.00", d: " M 307.49 198.37 C 310.63 201.51 313.76 204.66 316.93 207.76 C 319.07 207.75 321.20 207.74 323.34 207.75 C 322.52 214.49 323.10 221.25 323.12 228.01 C 322.32 235.99 323.43 243.99 323.00 251.99 C 323.46 258.99 322.36 266.00 323.01 273.00 C 323.81 281.00 322.20 289.00 323.11 297.01 C 323.51 318.34 322.57 339.67 322.81 360.99 C 317.59 361.02 312.38 360.98 307.16 360.99 C 307.33 318.32 307.19 275.64 307.24 232.96 C 307.28 221.43 306.98 209.89 307.49 198.37 Z" })),
        React.createElement("g", { id: "#f6f2c0ff" },
            React.createElement("path", { fill: "#f6f2c0", opacity: "1.00", d: " M 323.34 207.75 C 338.88 207.75 354.41 207.75 369.95 207.75 C 369.91 240.83 369.93 273.90 369.94 306.97 C 349.44 317.27 334.85 338.18 332.38 361.00 C 329.19 360.99 326.00 360.97 322.81 360.99 C 322.57 339.67 323.51 318.34 323.11 297.01 C 322.20 289.00 323.81 281.00 323.01 273.00 C 322.36 266.00 323.46 258.99 323.00 251.99 C 323.43 243.99 322.32 235.99 323.12 228.01 C 323.10 221.25 322.52 214.49 323.34 207.75 Z" })),
        React.createElement("g", { id: "#f6e7b4ff" },
            React.createElement("path", { fill: "#f6e7b4", opacity: "1.00", d: " M 369.95 207.75 C 372.58 207.75 375.22 207.75 377.85 207.75 C 377.82 239.68 377.89 271.62 377.80 303.55 L 377.80 303.71 C 375.13 304.67 372.52 305.79 369.94 306.97 C 369.93 273.90 369.91 240.83 369.95 207.75 Z" })),
        React.createElement("g", { id: "#f6e4a0ff" },
            React.createElement("path", { fill: "#f6e4a0", opacity: "1.00", d: " M 377.85 207.75 C 380.53 207.75 383.22 207.75 385.90 207.75 C 385.72 238.95 385.91 270.14 385.83 301.34 C 383.14 302.04 380.47 302.80 377.80 303.55 C 377.89 271.62 377.82 239.68 377.85 207.75 Z" })),
        React.createElement("g", { id: "#f6e18cff" },
            React.createElement("path", { fill: "#f6e18c", opacity: "1.00", d: " M 385.90 207.75 C 388.58 207.75 391.27 207.75 393.95 207.75 C 393.68 238.52 394.40 269.29 393.99 300.06 C 391.26 300.43 388.54 300.85 385.83 301.34 C 385.91 270.14 385.72 238.95 385.90 207.75 Z" }),
            React.createElement("path", { fill: "#f6e18c", opacity: "1.00", d: " M 423.21 319.81 C 425.64 321.07 428.02 322.43 430.36 323.86 C 430.46 353.66 430.42 383.47 430.39 413.28 C 428.06 414.70 425.69 416.04 423.28 417.30 C 423.40 410.52 422.54 403.76 422.96 396.99 C 423.29 389.80 423.37 382.57 422.37 375.42 C 423.47 370.85 423.44 366.13 422.33 361.57 C 423.80 354.46 423.13 347.20 423.21 340.00 C 423.19 333.27 423.26 326.54 423.21 319.81 Z" })),
        React.createElement("g", { id: "#f3d977ff" },
            React.createElement("path", { fill: "#f3d977", opacity: "1.00", d: " M 393.95 207.75 C 396.95 207.74 399.96 207.75 402.97 207.76 C 402.59 238.42 402.79 269.09 402.88 299.76 C 399.91 299.71 396.95 299.86 393.99 300.06 C 394.40 269.29 393.68 238.52 393.95 207.75 Z" })),
        React.createElement("g", { id: "#e7c66cff" },
            React.createElement("path", { fill: "#e7c66c", opacity: "1.00", d: " M 402.97 207.76 C 405.37 207.76 407.78 207.75 410.20 207.68 C 410.21 238.60 410.30 269.53 410.16 300.45 C 407.73 300.22 405.30 300.01 402.88 299.76 C 402.79 269.09 402.59 238.42 402.97 207.76 Z" })),
        React.createElement("g", { id: "#dbb360ff" },
            React.createElement("path", { fill: "#dbb360", opacity: "1.00", d: " M 410.20 207.68 C 413.48 208.00 416.69 208.79 419.81 209.88 C 419.47 240.72 420.04 271.57 419.52 302.41 C 416.42 301.67 413.29 301.03 410.16 300.45 C 410.30 269.53 410.21 238.60 410.20 207.68 Z" })),
        React.createElement("g", { id: "#e0bc65ff" },
            React.createElement("path", { fill: "#e0bc65", opacity: "1.00", d: " M 160.38 223.09 C 161.99 223.05 163.60 223.02 165.21 222.99 C 165.34 233.24 165.37 243.48 165.22 253.73 C 163.67 253.74 162.13 253.78 160.59 253.82 C 160.45 243.89 160.74 233.96 160.41 224.04 L 160.38 223.09 Z" })),
        React.createElement("g", { id: "#eed172ff" },
            React.createElement("path", { fill: "#eed172", opacity: "1.00", d: " M 165.21 222.99 C 166.58 223.00 167.96 223.01 169.33 223.02 C 169.53 233.26 169.54 243.50 169.34 253.74 C 167.97 253.73 166.59 253.73 165.22 253.73 C 165.37 243.48 165.34 233.24 165.21 222.99 Z" })),
        React.createElement("g", { id: "#f6e48bff" },
            React.createElement("path", { fill: "#f6e48b", opacity: "1.00", d: " M 169.33 223.02 C 172.80 223.01 176.26 222.99 179.72 223.00 C 179.77 233.24 179.00 243.55 180.30 253.74 C 176.65 253.78 172.99 253.74 169.34 253.74 C 169.54 243.50 169.53 233.26 169.33 223.02 Z" })),
        React.createElement("g", { id: "#f6f0acff" },
            React.createElement("path", { fill: "#f6f0ac", opacity: "1.00", d: " M 179.72 223.00 C 182.09 223.01 184.46 223.00 186.83 223.00 C 186.64 232.85 187.04 242.70 186.69 252.55 C 184.56 252.96 182.43 253.36 180.30 253.74 C 179.00 243.55 179.77 233.24 179.72 223.00 Z" }),
            React.createElement("path", { fill: "#f6f0ac", opacity: "1.00", d: " M 384.89 317.06 C 387.51 316.41 390.15 315.83 392.81 315.32 C 393.15 325.79 391.68 336.40 393.64 346.75 C 390.65 347.80 387.82 349.34 385.39 351.39 C 384.82 339.96 384.87 328.50 384.89 317.06 Z" }),
            React.createElement("path", { fill: "#f6f0ac", opacity: "1.00", d: " M 384.89 404.98 C 385.13 398.69 384.41 392.34 385.74 386.14 C 388.03 387.85 390.54 389.29 393.22 390.31 C 392.60 400.83 392.07 411.49 393.51 421.96 C 390.70 421.48 387.92 420.86 385.15 420.18 C 384.98 415.12 384.77 410.05 384.89 404.98 Z" })),
        React.createElement("g", { id: "#f6f0c0ff" },
            React.createElement("path", { fill: "#f6f0c0", opacity: "1.00", d: " M 186.83 223.00 C 193.95 222.96 201.07 223.08 208.20 222.95 C 208.41 232.86 208.08 242.78 208.33 252.69 C 209.57 253.02 210.82 253.34 212.08 253.64 C 201.34 253.91 190.60 253.61 179.87 253.82 L 180.30 253.74 C 182.43 253.36 184.56 252.96 186.69 252.55 C 187.04 242.70 186.64 232.85 186.83 223.00 Z" }),
            React.createElement("path", { fill: "#f6f0c0", opacity: "1.00", d: " M 392.81 315.32 C 400.98 314.33 409.36 314.95 417.22 317.48 C 417.00 329.13 417.78 340.83 416.68 352.45 C 410.72 346.60 401.66 344.19 393.64 346.75 C 391.68 336.40 393.15 325.79 392.81 315.32 Z" }),
            React.createElement("path", { fill: "#f6f0c0", opacity: "1.00", d: " M 393.22 390.31 C 400.94 392.87 409.74 390.92 415.77 385.51 C 416.66 397.00 416.20 408.53 416.19 420.04 C 408.83 422.15 401.11 422.75 393.51 421.96 C 392.07 411.49 392.60 400.83 393.22 390.31 Z" })),
        React.createElement("g", { id: "#f6e5a4ff" },
            React.createElement("path", { fill: "#f6e5a4", opacity: "1.00", d: " M 208.20 222.95 C 210.68 223.01 213.16 223.25 215.62 223.59 L 215.62 223.72 C 215.46 233.74 215.40 243.77 215.62 253.79 C 214.43 253.79 213.25 253.74 212.08 253.64 C 210.82 253.34 209.57 253.02 208.33 252.69 C 208.08 242.78 208.41 232.86 208.20 222.95 Z" })),
        React.createElement("g", { id: "#f6e084ff" },
            React.createElement("path", { fill: "#f6e084", opacity: "1.00", d: " M 215.62 223.72 C 217.14 224.11 218.66 224.52 220.18 224.94 C 220.26 234.54 220.25 244.15 220.18 253.75 C 218.66 253.75 217.14 253.76 215.62 253.79 C 215.40 243.77 215.46 233.74 215.62 223.72 Z" })),
        React.createElement("g", { id: "#eccf71ff" },
            React.createElement("path", { fill: "#eccf71", opacity: "1.00", d: " M 220.18 224.94 C 222.22 225.97 224.23 227.03 226.24 228.13 L 226.22 228.27 C 225.06 236.71 225.61 245.24 225.70 253.73 C 223.86 253.73 222.02 253.75 220.18 253.75 C 220.25 244.15 220.26 234.54 220.18 224.94 Z" })),
        React.createElement("g", { id: "#dcb662ff" },
            React.createElement("path", { fill: "#dcb662", opacity: "1.00", d: " M 226.22 228.27 C 227.68 229.36 229.12 230.48 230.56 231.62 C 230.09 238.99 230.58 246.40 229.78 253.77 C 228.41 253.75 227.05 253.74 225.70 253.73 C 225.61 245.24 225.06 236.71 226.22 228.27 Z" })),
        React.createElement("g", { id: "#f6f4c0ff" },
            React.createElement("path", { fill: "#f6f4c0", opacity: "1.00", d: " M 182.97 270.29 C 188.80 268.97 194.90 269.56 200.84 269.65 C 200.87 280.02 201.55 290.42 200.53 300.76 C 194.69 299.87 188.70 300.16 182.96 301.55 C 182.48 291.36 183.09 281.16 182.61 270.98 L 182.97 270.29 Z" }),
            React.createElement("path", { fill: "#f6f4c0", opacity: "1.00", d: " M 179.22 389.55 C 186.16 391.84 193.64 392.39 200.87 391.35 C 201.05 401.72 200.97 412.10 200.96 422.47 C 193.55 423.13 186.08 422.69 178.77 421.36 C 179.12 410.76 179.24 400.16 179.22 389.55 Z" })),
        React.createElement("g", { id: "#f6ebc0ff" },
            React.createElement("path", { fill: "#f6ebc0", opacity: "1.00", d: " M 200.84 269.65 C 206.34 270.20 211.77 271.32 217.06 272.94 C 216.60 284.10 217.41 295.27 216.64 306.43 C 211.67 303.58 206.19 301.64 200.53 300.76 C 201.55 290.42 200.87 280.02 200.84 269.65 Z" })),
        React.createElement("g", { id: "#f6f1aeff" },
            React.createElement("path", { fill: "#f6f1ae", opacity: "1.00", d: " M 173.01 272.32 C 175.95 271.34 179.09 270.34 182.19 270.56 L 182.61 270.98 C 183.09 281.16 182.48 291.36 182.96 301.55 C 179.80 302.34 176.71 303.44 173.76 304.82 C 172.06 294.28 174.05 283.58 172.71 273.00 L 173.01 272.32 Z" })),
        React.createElement("g", { id: "#f1d675ff" },
            React.createElement("path", { fill: "#f1d675", opacity: "1.00", d: " M 284.28 280.87 C 288.80 278.38 292.61 274.82 295.66 270.69 C 296.32 277.12 295.94 283.57 295.78 290.02 C 295.83 313.68 295.80 337.34 295.90 361.00 C 291.96 361.01 288.03 360.97 284.10 360.94 C 286.26 349.51 285.68 337.81 283.61 326.43 C 284.10 322.63 284.60 318.82 284.50 314.98 C 284.30 303.61 284.62 292.24 284.28 280.87 Z" })),
        React.createElement("g", { id: "#f6ea9cff" },
            React.createElement("path", { fill: "#f6ea9c", opacity: "1.00", d: " M 165.91 274.50 C 168.00 273.80 170.07 272.93 172.27 272.66 L 172.71 273.00 C 174.05 283.58 172.06 294.28 173.76 304.82 C 171.16 306.14 168.68 307.68 166.33 309.39 C 165.43 297.77 166.41 286.12 165.91 274.50 Z" })),
        React.createElement("g", { id: "#f6e6b0ff" },
            React.createElement("path", { fill: "#f6e6b0", opacity: "1.00", d: " M 217.06 272.94 C 218.82 273.56 220.58 274.20 222.35 274.85 C 222.42 286.64 222.63 298.44 222.19 310.23 C 220.41 308.85 218.56 307.57 216.64 306.43 C 217.41 295.27 216.60 284.10 217.06 272.94 Z" })),
        React.createElement("g", { id: "#f6e58dff" },
            React.createElement("path", { fill: "#f6e58d", opacity: "1.00", d: " M 158.84 277.66 C 161.17 276.55 163.53 275.49 165.91 274.50 C 166.41 286.12 165.43 297.77 166.33 309.39 C 163.88 311.27 161.61 313.37 159.52 315.64 C 158.16 303.03 159.15 290.32 158.84 277.66 Z" })),
        React.createElement("g", { id: "#f6e293ff" },
            React.createElement("path", { fill: "#f6e293", opacity: "1.00", d: " M 222.35 274.85 C 226.72 276.60 230.88 278.83 234.89 281.28 C 234.02 295.69 235.37 310.16 234.15 324.55 C 231.15 319.05 227.09 314.13 222.19 310.23 C 222.63 298.44 222.42 286.64 222.35 274.85 Z" })),
        React.createElement("g", { id: "#f6de7bff" },
            React.createElement("path", { fill: "#f6de7b", opacity: "1.00", d: " M 150.45 282.66 C 153.19 280.89 155.97 279.19 158.84 277.66 C 159.15 290.32 158.16 303.03 159.52 315.64 C 156.32 319.22 153.75 323.34 151.76 327.70 C 151.10 325.17 150.53 322.60 150.54 319.97 C 150.59 307.53 150.74 295.09 150.45 282.66 Z" })),
        React.createElement("g", { id: "#e3c068ff" },
            React.createElement("path", { fill: "#e3c068", opacity: "1.00", d: " M 278.89 283.05 C 280.69 282.33 282.48 281.60 284.28 280.87 C 284.62 292.24 284.30 303.61 284.50 314.98 C 284.60 318.82 284.10 322.63 283.61 326.43 C 282.15 321.31 280.59 316.23 278.82 311.21 C 278.88 301.82 278.77 292.44 278.89 283.05 Z" })),
        React.createElement("g", { id: "#f2d877ff" },
            React.createElement("path", { fill: "#f2d877", opacity: "1.00", d: " M 234.89 281.28 C 237.45 282.93 239.89 284.77 242.30 286.65 C 241.80 302.09 242.55 317.53 241.87 332.97 C 242.45 345.30 241.37 357.63 241.91 369.96 C 242.44 381.76 241.47 393.60 242.41 405.38 C 239.81 407.49 237.08 409.43 234.28 411.26 C 234.25 400.17 234.17 389.08 234.34 378.00 C 234.38 375.05 233.86 372.14 233.19 369.29 C 241.21 355.82 241.63 338.34 234.15 324.55 C 235.37 310.16 234.02 295.69 234.89 281.28 Z" })),
        React.createElement("g", { id: "#e5c36aff" },
            React.createElement("path", { fill: "#e5c36a", opacity: "1.00", d: " M 141.65 289.71 C 144.42 287.17 147.34 284.78 150.45 282.66 C 150.74 295.09 150.59 307.53 150.54 319.97 C 150.53 322.60 151.10 325.17 151.76 327.70 C 147.35 337.62 146.91 348.98 149.81 359.38 C 148.60 375.74 149.87 392.17 149.12 408.55 C 146.46 406.62 143.93 404.51 141.48 402.32 C 141.85 392.56 142.32 382.78 141.80 373.02 C 141.86 351.67 141.56 330.32 142.12 308.98 C 141.80 302.56 141.76 296.14 141.65 289.71 Z" }),
            React.createElement("path", { fill: "#e5c36a", opacity: "1.00", d: " M 242.30 286.65 C 245.24 289.08 247.98 291.75 250.57 294.56 C 249.92 298.34 249.51 302.17 249.60 306.01 C 249.87 336.77 249.39 367.53 249.84 398.28 C 247.74 401.01 244.97 403.11 242.41 405.38 C 241.47 393.60 242.44 381.76 241.91 369.96 C 241.37 357.63 242.45 345.30 241.87 332.97 C 242.55 317.53 241.80 302.09 242.30 286.65 Z" })),
        React.createElement("g", { id: "#d9b15fff" },
            React.createElement("path", { fill: "#d9b15f", opacity: "1.00", d: " M 272.60 284.23 C 274.70 283.85 276.80 283.46 278.89 283.05 C 278.77 292.44 278.88 301.82 278.82 311.21 C 276.57 306.48 274.33 301.73 271.57 297.27 C 271.90 292.92 272.24 288.57 272.60 284.23 Z" })),
        React.createElement("g", { id: "#d0a256ff" },
            React.createElement("path", { fill: "#d0a256", opacity: "1.00", d: " M 261.84 284.26 C 265.43 284.29 269.01 284.26 272.60 284.23 C 272.24 288.57 271.90 292.92 271.57 297.27 C 268.59 292.74 265.36 288.38 261.84 284.26 Z" })),
        React.createElement("g", { id: "#d7ad5cff" },
            React.createElement("path", { fill: "#d7ad5c", opacity: "1.00", d: " M 133.60 298.42 C 136.05 295.31 138.81 292.47 141.65 289.71 C 141.76 296.14 141.80 302.56 142.12 308.98 C 141.56 330.32 141.86 351.67 141.80 373.02 C 142.32 382.78 141.85 392.56 141.48 402.32 C 138.83 399.82 136.36 397.14 134.06 394.32 C 134.59 386.87 134.29 379.40 134.35 371.95 C 134.42 350.30 134.31 328.65 134.39 307.01 C 134.35 304.13 133.99 301.26 133.60 298.42 Z" })),
        React.createElement("g", { id: "#d8ae5dff" },
            React.createElement("path", { fill: "#d8ae5d", opacity: "1.00", d: " M 250.57 294.56 C 252.61 296.82 254.51 299.21 256.30 301.68 C 255.62 307.43 255.98 313.22 255.96 319.00 C 255.46 335.00 256.46 351.00 255.86 367.01 C 256.28 374.80 255.59 382.61 256.36 390.38 C 254.35 393.14 252.28 395.88 249.84 398.28 C 249.39 367.53 249.87 336.77 249.60 306.01 C 249.51 302.17 249.92 298.34 250.57 294.56 Z" })),
        React.createElement("g", { id: "#f6e896ff" },
            React.createElement("path", { fill: "#f6e896", opacity: "1.00", d: " M 377.93 319.72 C 380.22 318.76 382.54 317.87 384.89 317.06 C 384.87 328.50 384.82 339.96 385.39 351.39 C 382.36 354.18 380.09 357.70 378.55 361.52 C 376.99 347.62 378.80 333.65 377.93 319.72 Z" }),
            React.createElement("path", { fill: "#f6e896", opacity: "1.00", d: " M 378.53 375.52 C 380.07 379.56 382.53 383.23 385.74 386.14 C 384.41 392.34 385.13 398.69 384.89 404.98 C 384.77 410.05 384.98 415.12 385.15 420.18 C 382.67 419.35 380.23 418.40 377.81 417.42 C 378.78 403.46 377.21 389.47 378.53 375.52 Z" })),
        React.createElement("g", { id: "#f6e5a7ff" },
            React.createElement("path", { fill: "#f6e5a7", opacity: "1.00", d: " M 417.22 317.48 C 419.23 318.22 421.22 319.01 423.21 319.81 C 423.26 326.54 423.19 333.27 423.21 340.00 C 423.13 347.20 423.80 354.46 422.33 361.57 C 420.95 358.25 419.09 355.12 416.68 352.45 C 417.78 340.83 417.00 329.13 417.22 317.48 Z" })),
        React.createElement("g", { id: "#f6e07fff" },
            React.createElement("path", { fill: "#f6e07f", opacity: "1.00", d: " M 369.36 324.65 C 372.12 322.85 374.98 321.20 377.93 319.72 C 378.80 333.65 376.99 347.62 378.55 361.52 C 377.37 366.13 377.35 370.91 378.53 375.52 C 377.21 389.47 378.78 403.46 377.81 417.42 C 374.96 415.97 372.22 414.34 369.49 412.68 L 369.51 412.51 C 370.85 404.03 370.07 395.50 369.76 387.00 C 370.87 378.68 369.14 370.33 370.14 362.02 C 370.84 355.32 369.13 348.65 369.96 341.96 C 370.68 336.19 370.09 330.39 369.36 324.65 Z" })),
        React.createElement("g", { id: "#ebcd6fff" },
            React.createElement("path", { fill: "#ebcd6f", opacity: "1.00", d: " M 430.36 323.86 C 433.58 326.10 436.54 328.67 439.31 331.45 C 438.84 334.60 438.48 337.77 438.49 340.96 C 438.60 355.64 438.51 370.32 438.55 385.00 C 438.62 391.90 438.06 398.86 439.30 405.70 C 436.55 408.47 433.58 411.02 430.39 413.28 C 430.42 383.47 430.46 353.66 430.36 323.86 Z" })),
        React.createElement("g", { id: "#e4c269ff" },
            React.createElement("path", { fill: "#e4c269", opacity: "1.00", d: " M 362.68 330.44 C 364.75 328.33 366.98 326.40 369.36 324.65 C 370.09 330.39 370.68 336.19 369.96 341.96 C 369.13 348.65 370.84 355.32 370.14 362.02 C 369.14 370.33 370.87 378.68 369.76 387.00 C 370.07 395.50 370.85 404.03 369.51 412.51 C 367.36 410.95 365.31 409.28 363.27 407.60 L 363.27 407.25 C 363.58 385.17 363.24 363.07 363.46 340.98 C 363.51 337.45 363.16 333.93 362.68 330.44 Z" })),
        React.createElement("g", { id: "#d6ac5bff" },
            React.createElement("path", { fill: "#d6ac5b", opacity: "1.00", d: " M 358.72 334.62 C 360.02 333.21 361.34 331.81 362.68 330.44 C 363.16 333.93 363.51 337.45 363.46 340.98 C 363.24 363.07 363.58 385.17 363.27 407.25 C 361.61 405.78 360.09 404.16 358.68 402.44 C 359.69 394.00 359.10 385.49 359.25 377.01 C 358.99 362.88 359.79 348.72 358.72 334.62 Z" })),
        React.createElement("g", { id: "#d8af5dff" },
            React.createElement("path", { fill: "#d8af5d", opacity: "1.00", d: " M 439.31 331.45 C 441.12 333.42 442.82 335.50 444.42 337.65 C 443.33 348.07 443.98 358.56 443.82 369.01 C 444.04 379.15 443.23 389.33 444.50 399.42 C 442.86 401.58 441.14 403.70 439.30 405.70 C 438.06 398.86 438.62 391.90 438.55 385.00 C 438.51 370.32 438.60 355.64 438.49 340.96 C 438.48 337.77 438.84 334.60 439.31 331.45 Z" })),
        React.createElement("g", { id: "#f5dc79ff" },
            React.createElement("path", { fill: "#f5dc79", opacity: "1.00", d: " M 149.12 408.55 C 149.87 392.17 148.60 375.74 149.81 359.38 C 151.70 365.22 154.68 370.70 158.58 375.45 C 157.70 388.32 158.43 401.22 158.14 414.11 C 155.03 412.42 152.03 410.56 149.12 408.55 Z" })),
        React.createElement("g", { id: "#f6e18aff" },
            React.createElement("path", { fill: "#f6e18a", opacity: "1.00", d: " M 233.19 369.29 C 233.86 372.14 234.38 375.05 234.34 378.00 C 234.17 389.08 234.25 400.17 234.28 411.26 C 232.27 412.42 230.26 413.56 228.20 414.62 C 226.81 402.19 228.53 389.66 227.22 377.23 C 229.48 374.80 231.47 372.12 233.19 369.29 Z" })),
        React.createElement("g", { id: "#f6e58fff" },
            React.createElement("path", { fill: "#f6e58f", opacity: "1.00", d: " M 158.58 375.45 C 161.74 379.28 165.62 382.44 169.78 385.11 C 167.63 395.93 169.50 407.03 168.66 417.98 L 168.30 418.29 C 164.69 417.50 161.46 415.65 158.14 414.11 C 158.43 401.22 157.70 388.32 158.58 375.45 Z" })),
        React.createElement("g", { id: "#f6e6abff" },
            React.createElement("path", { fill: "#f6e6ab", opacity: "1.00", d: " M 422.37 375.42 C 423.37 382.57 423.29 389.80 422.96 396.99 C 422.54 403.76 423.40 410.52 423.28 417.30 C 420.93 418.27 418.57 419.19 416.19 420.04 C 416.20 408.53 416.66 397.00 415.77 385.51 C 418.76 382.74 420.90 379.20 422.37 375.42 Z" })),
        React.createElement("g", { id: "#f6e5a6ff" },
            React.createElement("path", { fill: "#f6e5a6", opacity: "1.00", d: " M 216.25 385.93 C 220.31 383.59 224.01 380.64 227.22 377.23 C 228.53 389.66 226.81 402.19 228.20 414.62 L 228.21 414.73 C 224.34 416.47 220.44 418.14 216.39 419.43 C 216.43 408.27 216.63 397.09 216.25 385.93 Z" })),
        React.createElement("g", { id: "#f6eda5ff" },
            React.createElement("path", { fill: "#f6eda5", opacity: "1.00", d: " M 168.66 417.98 C 169.50 407.03 167.63 395.93 169.78 385.11 C 172.77 386.88 175.93 388.39 179.22 389.55 C 179.24 400.16 179.12 410.76 178.77 421.36 C 175.49 420.57 172.12 419.98 169.00 418.66 L 168.66 417.98 Z" })),
        React.createElement("g", { id: "#f6ecc0ff" },
            React.createElement("path", { fill: "#f6ecc0", opacity: "1.00", d: " M 200.87 391.35 C 206.24 390.37 211.50 388.63 216.25 385.93 C 216.63 397.09 216.43 408.27 216.39 419.43 C 211.33 420.84 206.19 421.96 200.96 422.47 C 200.97 412.10 201.05 401.72 200.87 391.35 Z" }))));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 591 591" }, props),
        React.createElement("g", { id: "#343434ff" },
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 270.59 36.82 C 302.95 34.15 335.86 37.28 366.95 46.82 C 418.07 62.25 463.92 94.43 495.93 137.15 C 519.84 168.74 536.11 206.03 543.04 245.04 C 551.22 290.99 546.68 339.20 529.59 382.66 C 516.30 416.74 495.42 447.81 469.08 473.17 C 442.94 498.36 411.35 517.88 377.08 529.87 C 338.44 543.52 296.48 547.26 255.96 541.48 C 214.01 535.47 173.74 518.57 139.93 493.05 C 96.14 460.15 63.40 412.77 48.47 360.04 C 36.31 317.56 35.52 271.91 46.07 229.01 C 57.88 180.57 84.54 135.93 121.39 102.37 C 162.13 64.92 215.42 41.42 270.59 36.82 M 290.37 162.09 L 290.39 162.26 C 283.64 163.46 279.54 169.43 274.53 173.50 C 270.00 177.44 265.69 181.61 261.07 185.45 L 261.06 185.79 C 255.00 190.78 249.36 196.26 243.47 201.45 C 237.50 206.79 231.58 212.18 225.63 217.53 C 221.56 221.17 217.46 224.77 213.50 228.51 C 208.20 232.91 203.37 237.83 198.09 242.24 L 198.10 242.56 C 193.20 246.41 188.80 250.83 184.12 254.94 C 174.71 263.27 165.45 271.79 156.07 280.16 C 152.55 283.04 152.47 289.04 156.02 291.93 C 158.13 294.04 161.30 293.73 164.03 293.79 C 171.61 293.70 179.20 293.82 186.78 293.72 C 186.74 327.48 186.78 361.24 186.76 395.00 C 186.69 399.19 186.46 403.66 188.70 407.40 C 190.62 411.35 194.56 413.72 198.60 415.08 C 203.72 415.35 208.84 415.23 213.97 415.25 C 218.02 415.23 222.07 415.25 226.12 415.25 C 232.09 415.25 238.07 415.24 244.04 415.27 C 251.31 416.24 259.14 412.79 261.93 405.72 C 262.61 403.53 263.01 401.26 262.99 398.98 C 263.00 374.06 262.94 349.15 263.02 324.23 C 267.00 324.26 270.98 324.26 274.96 324.25 C 280.29 324.25 285.62 324.25 290.96 324.25 C 301.80 324.26 312.65 324.24 323.50 324.26 C 323.51 349.49 323.51 374.73 323.50 399.97 C 323.36 405.73 326.86 411.53 332.28 413.70 L 332.18 414.17 C 338.27 415.91 344.62 415.07 350.85 415.25 C 354.58 415.26 358.31 415.25 362.04 415.25 C 365.72 415.25 369.41 415.24 373.09 415.25 C 377.43 415.27 381.77 415.18 386.12 415.31 C 393.56 414.32 399.79 407.63 399.69 400.02 C 399.72 364.57 399.76 329.11 399.66 293.66 C 408.46 293.96 417.28 293.73 426.08 293.70 C 432.18 293.69 435.48 285.12 431.10 280.97 C 423.88 274.17 416.36 267.68 409.06 260.98 C 406.68 258.87 404.42 256.63 401.85 254.76 L 401.86 254.44 C 396.61 249.97 391.65 245.17 386.45 240.64 C 382.01 236.71 377.67 232.67 373.23 228.73 C 369.47 225.41 365.90 221.87 361.94 218.77 L 361.94 218.42 C 358.15 215.32 354.70 211.83 350.90 208.75 C 345.17 203.25 339.09 198.12 333.30 192.70 C 323.61 184.08 314.02 175.37 304.39 166.70 C 300.74 163.03 295.46 161.47 290.37 162.09 Z" })),
        React.createElement("g", { id: "#f6eec0ff" },
            React.createElement("path", { fill: "#f6eec0", opacity: "1.00", d: " M 290.37 162.09 C 295.46 161.47 300.74 163.03 304.39 166.70 C 314.02 175.37 323.61 184.08 333.30 192.70 C 333.06 260.79 333.26 328.89 333.18 396.98 C 332.95 402.54 334.01 408.31 332.28 413.70 C 326.86 411.53 323.36 405.73 323.50 399.97 C 323.51 374.73 323.51 349.49 323.50 324.26 C 312.65 324.24 301.80 324.26 290.96 324.25 C 291.14 275.51 290.97 226.77 291.01 178.03 C 291.05 172.77 291.38 167.47 290.39 162.26 L 290.37 162.09 Z" })),
        React.createElement("g", { id: "#f6f6c0ff" },
            React.createElement("path", { fill: "#f6f6c0", opacity: "1.00", d: " M 274.53 173.50 C 279.54 169.43 283.64 163.46 290.39 162.26 C 291.38 167.47 291.05 172.77 291.01 178.03 C 290.97 226.77 291.14 275.51 290.96 324.25 C 285.62 324.25 280.29 324.25 274.96 324.25 C 274.92 278.50 274.94 232.76 274.93 187.02 C 275.03 182.50 274.95 177.99 274.53 173.50 Z" })),
        React.createElement("g", { id: "#f6f3b4ff" },
            React.createElement("path", { fill: "#f6f3b4", opacity: "1.00", d: " M 261.07 185.45 C 265.69 181.61 270.00 177.44 274.53 173.50 C 274.95 177.99 275.03 182.50 274.93 187.02 C 274.94 232.76 274.92 278.50 274.96 324.25 C 270.98 324.26 267.00 324.26 263.02 324.23 C 262.94 349.15 263.00 374.06 262.99 398.98 C 263.01 401.26 262.61 403.53 261.93 405.72 C 260.13 400.32 261.16 394.58 260.93 389.01 C 261.01 321.27 260.77 253.53 261.06 185.79 L 261.07 185.45 Z" })),
        React.createElement("g", { id: "#f6eca0ff" },
            React.createElement("path", { fill: "#f6eca0", opacity: "1.00", d: " M 243.47 201.45 C 249.36 196.26 255.00 190.78 261.06 185.79 C 260.77 253.53 261.01 321.27 260.93 389.01 C 261.16 394.58 260.13 400.32 261.93 405.72 C 259.14 412.79 251.31 416.24 244.04 415.27 C 243.95 350.52 244.01 285.77 243.94 221.02 C 243.93 214.49 244.50 207.93 243.47 201.45 Z" })),
        React.createElement("g", { id: "#f6e6adff" },
            React.createElement("path", { fill: "#f6e6ad", opacity: "1.00", d: " M 333.30 192.70 C 339.09 198.12 345.17 203.25 350.90 208.75 C 350.73 277.58 350.84 346.41 350.85 415.25 C 344.62 415.07 338.27 415.91 332.18 414.17 L 332.28 413.70 C 334.01 408.31 332.95 402.54 333.18 396.98 C 333.26 328.89 333.06 260.79 333.30 192.70 Z" })),
        React.createElement("g", { id: "#f6e48cff" },
            React.createElement("path", { fill: "#f6e48c", opacity: "1.00", d: " M 225.63 217.53 C 231.58 212.18 237.50 206.79 243.47 201.45 C 244.50 207.93 243.93 214.49 243.94 221.02 C 244.01 285.77 243.95 350.52 244.04 415.27 C 238.07 415.24 232.09 415.25 226.12 415.25 C 226.13 357.49 226.12 299.73 226.13 241.97 C 225.87 233.83 226.61 225.65 225.63 217.53 Z" })),
        React.createElement("g", { id: "#f6e294ff" },
            React.createElement("path", { fill: "#f6e294", opacity: "1.00", d: " M 350.90 208.75 C 354.70 211.83 358.15 215.32 361.94 218.42 L 361.94 218.77 C 362.00 284.27 361.89 349.76 362.04 415.25 C 358.31 415.25 354.58 415.26 350.85 415.25 C 350.84 346.41 350.73 277.58 350.90 208.75 Z" })),
        React.createElement("g", { id: "#f5dd79ff" },
            React.createElement("path", { fill: "#f5dd79", opacity: "1.00", d: " M 213.50 228.51 C 217.46 224.77 221.56 221.17 225.63 217.53 C 226.61 225.65 225.87 233.83 226.13 241.97 C 226.12 299.73 226.13 357.49 226.12 415.25 C 222.07 415.25 218.02 415.23 213.97 415.25 C 213.73 365.16 213.92 315.07 213.85 264.97 C 213.71 252.82 214.29 240.65 213.50 228.51 Z" })),
        React.createElement("g", { id: "#f6df81ff" },
            React.createElement("path", { fill: "#f6df81", opacity: "1.00", d: " M 361.94 218.77 C 365.90 221.87 369.47 225.41 373.23 228.73 C 372.98 290.90 373.27 353.08 373.09 415.25 C 369.41 415.24 365.72 415.25 362.04 415.25 C 361.89 349.76 362.00 284.27 361.94 218.77 Z" })),
        React.createElement("g", { id: "#e6c56bff" },
            React.createElement("path", { fill: "#e6c56b", opacity: "1.00", d: " M 198.09 242.24 C 203.37 237.83 208.20 232.91 213.50 228.51 C 214.29 240.65 213.71 252.82 213.85 264.97 C 213.92 315.07 213.73 365.16 213.97 415.25 C 208.84 415.23 203.72 415.35 198.60 415.08 C 197.94 408.74 198.23 402.37 198.21 396.02 C 198.14 344.86 198.34 293.71 198.10 242.56 L 198.09 242.24 Z" })),
        React.createElement("g", { id: "#eed172ff" },
            React.createElement("path", { fill: "#eed172", opacity: "1.00", d: " M 373.23 228.73 C 377.67 232.67 382.01 236.71 386.45 240.64 C 385.50 256.07 386.44 271.54 385.97 286.98 C 386.31 329.76 385.89 372.53 386.12 415.31 C 381.77 415.18 377.43 415.27 373.09 415.25 C 373.27 353.08 372.98 290.90 373.23 228.73 Z" })),
        React.createElement("g", { id: "#dfba64ff" },
            React.createElement("path", { fill: "#dfba64", opacity: "1.00", d: " M 386.45 240.64 C 391.65 245.17 396.61 249.97 401.86 254.44 L 401.85 254.76 C 401.64 267.52 401.68 280.28 401.80 293.04 C 401.26 293.20 400.20 293.51 399.66 293.66 C 399.76 329.11 399.72 364.57 399.69 400.02 C 399.79 407.63 393.56 414.32 386.12 415.31 C 385.89 372.53 386.31 329.76 385.97 286.98 C 386.44 271.54 385.50 256.07 386.45 240.64 Z" })),
        React.createElement("g", { id: "#d7ae5cff" },
            React.createElement("path", { fill: "#d7ae5c", opacity: "1.00", d: " M 184.12 254.94 C 188.80 250.83 193.20 246.41 198.10 242.56 C 198.34 293.71 198.14 344.86 198.21 396.02 C 198.23 402.37 197.94 408.74 198.60 415.08 C 194.56 413.72 190.62 411.35 188.70 407.40 C 186.46 403.66 186.69 399.19 186.76 395.00 C 186.78 361.24 186.74 327.48 186.78 293.72 C 185.98 293.22 185.18 292.72 184.38 292.24 C 184.11 279.80 184.64 267.36 184.12 254.94 Z" })),
        React.createElement("g", { id: "#cb9b51ff" },
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 156.07 280.16 C 165.45 271.79 174.71 263.27 184.12 254.94 C 184.64 267.36 184.11 279.80 184.38 292.24 C 185.18 292.72 185.98 293.22 186.78 293.72 C 179.20 293.82 171.61 293.70 164.03 293.79 C 161.30 293.73 158.13 294.04 156.02 291.93 C 152.47 289.04 152.55 283.04 156.07 280.16 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 409.06 260.98 C 416.36 267.68 423.88 274.17 431.10 280.97 C 435.48 285.12 432.18 293.69 426.08 293.70 C 417.28 293.73 408.46 293.96 399.66 293.66 C 400.20 293.51 401.26 293.20 401.80 293.04 C 404.14 292.83 406.50 292.81 408.86 292.80 C 409.14 282.19 408.80 271.58 409.06 260.98 Z" })),
        React.createElement("g", { id: "#d2a658ff" },
            React.createElement("path", { fill: "#d2a658", opacity: "1.00", d: " M 401.85 254.76 C 404.42 256.63 406.68 258.87 409.06 260.98 C 408.80 271.58 409.14 282.19 408.86 292.80 C 406.50 292.81 404.14 292.83 401.80 293.04 C 401.68 280.28 401.64 267.52 401.85 254.76 Z" }))));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 591 591" }, props),
        React.createElement("g", { id: "#343434ff" },
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 277.28 36.34 C 306.95 34.65 336.95 37.81 365.44 46.36 C 417.12 61.61 463.52 93.94 495.84 137.03 C 515.85 163.46 530.57 193.88 538.87 225.98 C 551.35 274.11 549.44 325.92 533.16 372.93 C 522.03 405.43 504.05 435.53 480.95 460.95 C 455.16 489.41 422.79 511.88 387.12 526.11 C 347.31 542.11 303.41 547.41 260.88 542.15 C 222.19 537.35 184.67 523.40 152.24 501.75 C 113.35 476.01 81.84 439.29 62.22 396.98 C 44.69 359.34 36.76 317.35 39.11 275.91 C 41.56 228.51 57.77 181.93 85.30 143.27 C 110.09 108.13 143.96 79.46 182.74 60.87 C 212.24 46.61 244.58 38.28 277.28 36.34 M 159.06 183.05 C 155.52 186.33 154.10 191.27 154.24 195.99 C 154.27 250.00 154.24 304.00 154.25 358.01 C 154.29 364.67 153.72 371.59 156.17 377.94 C 160.23 389.52 171.61 398.04 183.86 398.66 C 189.46 398.72 195.06 398.76 200.66 398.78 C 202.45 398.76 204.24 398.75 206.04 398.74 C 208.37 398.74 210.71 398.75 213.05 398.75 C 215.33 398.74 217.62 398.74 219.91 398.75 C 231.85 398.65 243.79 398.85 255.73 398.71 C 287.22 398.74 318.72 398.87 350.21 398.62 C 351.47 398.71 352.72 398.77 353.99 398.81 C 356.64 398.74 359.29 398.73 361.95 398.75 C 364.61 398.75 367.28 398.75 369.94 398.75 C 372.97 398.75 376.00 398.74 379.03 398.75 C 381.69 398.75 384.35 398.74 387.02 398.74 C 389.32 398.74 391.63 398.74 393.95 398.75 C 396.61 398.75 399.28 398.74 401.95 398.75 C 409.05 398.70 416.16 398.84 423.26 398.53 C 428.82 398.05 433.88 394.18 435.96 389.02 C 439.02 382.06 436.22 373.17 429.64 369.33 C 424.96 366.30 419.16 367.03 413.88 367.03 C 409.95 367.03 406.03 366.98 402.10 367.00 C 399.42 367.01 396.74 367.00 394.06 367.00 C 391.68 367.00 389.31 367.00 386.95 367.01 C 384.29 367.01 381.64 367.00 378.99 367.00 C 375.98 367.01 372.98 366.99 369.98 367.00 C 367.31 367.00 364.63 366.99 361.96 367.00 C 359.29 367.00 356.62 367.00 353.96 367.00 C 351.29 367.00 348.62 367.00 345.96 367.00 C 343.27 367.00 340.58 367.00 337.89 367.01 C 316.28 367.01 294.66 366.99 273.04 367.00 C 270.01 367.00 266.98 367.00 263.95 367.00 C 260.90 366.99 257.85 367.00 254.80 367.00 C 246.93 366.98 239.06 367.03 231.19 367.01 C 227.44 366.99 223.68 367.01 219.93 367.00 C 217.61 367.00 215.30 367.00 212.99 367.00 C 210.68 367.00 208.37 367.00 206.06 367.01 C 203.99 367.00 201.92 367.00 199.86 367.00 C 195.92 366.99 191.99 367.02 188.07 367.05 C 187.55 367.02 186.52 366.95 186.00 366.92 C 186.00 309.62 185.99 252.32 186.01 195.02 C 186.18 190.04 183.93 185.05 179.99 181.98 C 174.01 177.19 164.49 177.59 159.06 183.05 M 327.03 193.96 C 326.93 204.56 327.04 215.16 326.99 225.75 C 316.69 225.74 306.39 225.74 296.09 225.75 C 294.03 225.74 291.96 225.75 289.90 225.75 C 285.55 225.72 281.21 225.74 276.87 225.84 C 270.53 227.42 265.11 232.64 264.38 239.30 C 264.05 245.28 264.36 251.27 264.26 257.26 C 262.26 257.26 260.26 257.26 258.26 257.26 C 255.74 257.26 253.23 257.25 250.71 257.23 C 246.20 257.19 241.68 257.31 237.17 257.24 C 235.21 257.22 233.24 257.08 231.30 257.37 C 226.19 257.13 221.07 257.20 215.96 257.28 C 208.30 257.43 201.61 264.40 201.51 272.02 C 201.46 293.34 201.52 314.66 201.49 335.98 C 201.25 343.21 206.95 350.01 214.03 351.26 C 218.62 351.82 223.25 351.39 227.86 351.50 C 230.98 351.50 234.10 351.52 237.23 351.49 C 241.74 351.47 246.25 351.52 250.76 351.51 C 253.26 351.50 255.76 351.49 258.26 351.49 C 264.49 351.48 270.71 351.52 276.93 351.50 C 281.27 351.49 285.61 351.51 289.95 351.50 C 292.00 351.50 294.06 351.50 296.12 351.50 C 311.42 351.52 326.72 351.49 342.01 351.50 C 344.70 351.50 347.40 351.50 350.09 351.50 C 354.66 351.51 359.24 351.48 363.81 351.50 C 368.47 351.52 373.12 351.48 377.78 351.49 C 381.16 351.51 384.55 351.49 387.95 351.50 C 390.65 351.50 393.36 351.50 396.07 351.50 C 398.36 351.49 400.65 351.49 402.95 351.54 C 408.21 351.95 413.81 350.57 417.39 346.47 C 420.80 342.88 421.76 337.77 421.54 332.98 C 421.46 287.00 421.52 241.02 421.51 195.04 C 421.73 188.93 418.25 182.87 412.70 180.23 C 409.71 178.58 406.21 178.73 402.92 178.71 C 400.64 178.75 398.38 178.76 396.11 178.76 C 392.17 178.74 388.23 178.73 384.29 178.74 C 381.50 178.75 378.72 178.75 375.93 178.75 C 371.88 178.75 367.83 178.74 363.79 178.75 C 359.24 178.76 354.69 178.74 350.14 178.76 C 347.44 178.77 344.74 178.76 342.05 178.63 C 334.01 178.84 327.02 185.91 327.03 193.96 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 358.75 210.24 C 360.44 210.24 362.13 210.25 363.83 210.25 C 367.87 210.25 371.92 210.25 375.96 210.25 C 378.73 210.25 381.50 210.25 384.27 210.25 C 386.09 210.26 387.91 210.26 389.74 210.27 C 389.76 246.81 389.70 283.35 389.77 319.90 C 389.35 319.92 388.51 319.96 388.09 319.98 C 384.67 320.08 381.26 320.00 377.85 320.01 C 373.18 320.02 368.51 319.99 363.85 320.00 C 362.14 320.01 360.44 320.01 358.74 320.02 C 358.74 283.43 358.74 246.84 358.75 210.24 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 295.87 257.49 C 306.24 257.53 316.62 257.50 326.99 257.49 C 327.01 278.33 326.99 299.16 327.00 320.00 C 316.61 320.00 306.21 320.00 295.82 320.00 C 295.74 299.17 295.65 278.33 295.87 257.49 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 233.07 288.86 C 237.64 288.58 242.21 288.82 246.78 288.71 C 252.61 288.71 258.43 288.79 264.26 288.74 C 264.26 299.17 264.26 309.59 264.26 320.02 C 262.25 320.01 260.25 320.02 258.24 320.01 C 255.75 320.00 253.26 320.00 250.78 320.00 C 246.25 319.98 241.73 320.06 237.21 320.02 C 235.80 320.00 234.40 319.99 233.00 319.98 C 233.04 309.61 232.91 299.23 233.07 288.86 Z" })),
        React.createElement("g", { id: "#cb9b51ff" },
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 159.06 183.05 C 164.49 177.59 174.01 177.19 179.99 181.98 C 183.93 185.05 186.18 190.04 186.01 195.02 C 185.99 252.32 186.00 309.62 186.00 366.92 C 186.52 366.95 187.55 367.02 188.07 367.05 C 188.26 375.03 188.13 383.01 188.28 390.99 C 188.23 393.11 188.38 395.31 187.65 397.34 C 186.41 397.86 185.15 398.30 183.86 398.66 C 171.61 398.04 160.23 389.52 156.17 377.94 C 153.72 371.59 154.29 364.67 154.25 358.01 C 154.24 304.00 154.27 250.00 154.24 195.99 C 154.10 191.27 155.52 186.33 159.06 183.05 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 402.92 178.71 C 406.21 178.73 409.71 178.58 412.70 180.23 C 418.25 182.87 421.73 188.93 421.51 195.04 C 421.52 241.02 421.46 287.00 421.54 332.98 C 421.76 337.77 420.80 342.88 417.39 346.47 C 413.81 350.57 408.21 351.95 402.95 351.54 C 402.83 293.93 402.90 236.32 402.92 178.71 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 201.51 272.02 C 201.61 264.40 208.30 257.43 215.96 257.28 C 221.07 257.20 226.19 257.13 231.30 257.37 C 230.50 257.59 228.92 258.04 228.12 258.27 C 227.49 289.33 228.16 320.42 227.86 351.50 C 223.25 351.39 218.62 351.82 214.03 351.26 C 206.95 350.01 201.25 343.21 201.49 335.98 C 201.52 314.66 201.46 293.34 201.51 272.02 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 413.88 367.03 C 419.16 367.03 424.96 366.30 429.64 369.33 C 436.22 373.17 439.02 382.06 435.96 389.02 C 433.88 394.18 428.82 398.05 423.26 398.53 C 420.17 398.35 417.09 397.96 414.01 397.65 C 413.53 387.45 413.73 377.23 413.88 367.03 Z" })),
        React.createElement("g", { id: "#f6edc0ff" },
            React.createElement("path", { fill: "#f6edc0", opacity: "1.00", d: " M 327.03 193.96 C 327.02 185.91 334.01 178.84 342.05 178.63 C 342.00 236.25 342.14 293.88 342.01 351.50 C 326.72 351.49 311.42 351.52 296.12 351.50 C 296.09 341.00 296.35 330.49 295.82 320.00 C 306.21 320.00 316.61 320.00 327.00 320.00 C 326.99 299.16 327.01 278.33 326.99 257.49 C 316.62 257.50 306.24 257.53 295.87 257.49 C 296.42 246.92 295.96 236.33 296.09 225.75 C 306.39 225.74 316.69 225.74 326.99 225.75 C 327.04 215.16 326.93 204.56 327.03 193.96 Z" })),
        React.createElement("g", { id: "#f6e7b6ff" },
            React.createElement("path", { fill: "#f6e7b6", opacity: "1.00", d: " M 342.05 178.63 C 344.74 178.76 347.44 178.77 350.14 178.76 C 350.10 236.34 350.17 293.92 350.09 351.50 C 347.40 351.50 344.70 351.50 342.01 351.50 C 342.14 293.88 342.00 236.25 342.05 178.63 Z" })),
        React.createElement("g", { id: "#f6e4a0ff" },
            React.createElement("path", { fill: "#f6e4a0", opacity: "1.00", d: " M 350.14 178.76 C 354.69 178.74 359.24 178.76 363.79 178.75 C 363.69 189.25 363.66 199.75 363.83 210.25 C 362.13 210.25 360.44 210.24 358.75 210.24 C 358.74 246.84 358.74 283.43 358.74 320.02 C 360.44 320.01 362.14 320.01 363.85 320.00 C 363.65 330.50 363.73 341.00 363.81 351.50 C 359.24 351.48 354.66 351.51 350.09 351.50 C 350.17 293.92 350.10 236.34 350.14 178.76 Z" })),
        React.createElement("g", { id: "#f6df81ff" },
            React.createElement("path", { fill: "#f6df81", opacity: "1.00", d: " M 363.79 178.75 C 367.83 178.74 371.88 178.75 375.93 178.75 C 375.81 189.25 375.76 199.75 375.96 210.25 C 371.92 210.25 367.87 210.25 363.83 210.25 C 363.66 199.75 363.69 189.25 363.79 178.75 Z" })),
        React.createElement("g", { id: "#edd072ff" },
            React.createElement("path", { fill: "#edd072", opacity: "1.00", d: " M 375.93 178.75 C 378.72 178.75 381.50 178.75 384.29 178.74 C 384.47 189.25 384.52 199.75 384.27 210.25 C 381.50 210.25 378.73 210.25 375.96 210.25 C 375.76 199.75 375.81 189.25 375.93 178.75 Z" })),
        React.createElement("g", { id: "#dcb561ff" },
            React.createElement("path", { fill: "#dcb561", opacity: "1.00", d: " M 384.29 178.74 C 388.23 178.73 392.17 178.74 396.11 178.76 C 395.77 222.52 396.20 266.28 395.91 310.05 C 396.06 323.86 396.07 337.68 396.07 351.50 C 393.36 351.50 390.65 351.50 387.95 351.50 C 387.84 341.00 387.55 330.47 388.09 319.98 C 388.51 319.96 389.35 319.92 389.77 319.90 C 389.70 283.35 389.76 246.81 389.74 210.27 C 387.91 210.26 386.09 210.26 384.27 210.25 C 384.52 199.75 384.47 189.25 384.29 178.74 Z" })),
        React.createElement("g", { id: "#d3a758ff" },
            React.createElement("path", { fill: "#d3a758", opacity: "1.00", d: " M 396.11 178.76 C 398.38 178.76 400.64 178.75 402.92 178.71 C 402.90 236.32 402.83 293.93 402.95 351.54 C 400.65 351.49 398.36 351.49 396.07 351.50 C 396.07 337.68 396.06 323.86 395.91 310.05 C 396.20 266.28 395.77 222.52 396.11 178.76 Z" })),
        React.createElement("g", { id: "#f6e691ff" },
            React.createElement("path", { fill: "#f6e691", opacity: "1.00", d: " M 264.38 239.30 C 265.11 232.64 270.53 227.42 276.87 225.84 C 276.88 267.73 276.75 309.61 276.93 351.50 C 270.71 351.52 264.49 351.48 258.26 351.49 C 258.41 341.00 258.45 330.50 258.24 320.01 C 260.25 320.02 262.25 320.01 264.26 320.02 C 264.26 309.59 264.26 299.17 264.26 288.74 C 262.31 288.25 260.37 287.76 258.42 287.28 C 258.27 277.27 258.50 267.26 258.26 257.26 C 260.26 257.26 262.26 257.26 264.26 257.26 C 264.36 251.27 264.05 245.28 264.38 239.30 Z" })),
        React.createElement("g", { id: "#f6eea7ff" },
            React.createElement("path", { fill: "#f6eea7", opacity: "1.00", d: " M 276.87 225.84 C 281.21 225.74 285.55 225.72 289.90 225.75 C 289.89 267.67 289.79 309.59 289.95 351.50 C 285.61 351.51 281.27 351.49 276.93 351.50 C 276.75 309.61 276.88 267.73 276.87 225.84 Z" }),
            React.createElement("path", { fill: "#f6eea7", opacity: "1.00", d: " M 254.80 367.00 C 257.85 367.00 260.90 366.99 263.95 367.00 C 264.15 377.39 263.89 387.79 264.02 398.18 C 261.22 398.25 258.41 398.27 255.60 398.27 C 254.23 393.29 254.75 388.09 254.75 382.99 C 254.76 377.66 254.74 372.33 254.80 367.00 Z" })),
        React.createElement("g", { id: "#f6f4b7ff" },
            React.createElement("path", { fill: "#f6f4b7", opacity: "1.00", d: " M 289.90 225.75 C 291.96 225.75 294.03 225.74 296.09 225.75 C 295.96 236.33 296.42 246.92 295.87 257.49 C 295.65 278.33 295.74 299.17 295.82 320.00 C 296.35 330.49 296.09 341.00 296.12 351.50 C 294.06 351.50 292.00 351.50 289.95 351.50 C 289.79 309.59 289.89 267.67 289.90 225.75 Z" })),
        React.createElement("g", { id: "#d6ac5bff" },
            React.createElement("path", { fill: "#d6ac5b", opacity: "1.00", d: " M 228.12 258.27 C 228.92 258.04 230.50 257.59 231.30 257.37 C 233.24 257.08 235.21 257.22 237.17 257.24 C 237.24 266.51 237.47 275.78 237.19 285.04 C 237.58 287.53 234.68 287.88 233.07 288.86 C 232.91 299.23 233.04 309.61 233.00 319.98 C 234.40 319.99 235.80 320.00 237.21 320.02 C 237.42 330.51 237.36 341.00 237.23 351.49 C 234.10 351.52 230.98 351.50 227.86 351.50 C 228.16 320.42 227.49 289.33 228.12 258.27 Z" })),
        React.createElement("g", { id: "#e7c66bff" },
            React.createElement("path", { fill: "#e7c66b", opacity: "1.00", d: " M 237.17 257.24 C 241.68 257.31 246.20 257.19 250.71 257.23 C 250.49 267.33 250.78 277.43 250.60 287.53 C 249.33 287.93 248.06 288.34 246.78 288.71 C 242.21 288.82 237.64 288.58 233.07 288.86 C 234.68 287.88 237.58 287.53 237.19 285.04 C 237.47 275.78 237.24 266.51 237.17 257.24 Z" })),
        React.createElement("g", { id: "#f6de7aff" },
            React.createElement("path", { fill: "#f6de7a", opacity: "1.00", d: " M 250.71 257.23 C 253.23 257.25 255.74 257.26 258.26 257.26 C 258.50 267.26 258.27 277.27 258.42 287.28 C 260.37 287.76 262.31 288.25 264.26 288.74 C 258.43 288.79 252.61 288.71 246.78 288.71 C 248.06 288.34 249.33 287.93 250.60 287.53 C 250.78 277.43 250.49 267.33 250.71 257.23 Z" }),
            React.createElement("path", { fill: "#f6de7a", opacity: "1.00", d: " M 250.78 320.00 C 253.26 320.00 255.75 320.00 258.24 320.01 C 258.45 330.50 258.41 341.00 258.26 351.49 C 255.76 351.49 253.26 351.50 250.76 351.51 C 250.60 341.01 250.72 330.50 250.78 320.00 Z" }),
            React.createElement("path", { fill: "#f6de7a", opacity: "1.00", d: " M 369.98 367.00 C 372.98 366.99 375.98 367.01 378.99 367.00 C 378.87 377.58 378.85 388.17 379.03 398.75 C 376.00 398.74 372.97 398.75 369.94 398.75 C 369.76 388.17 370.16 377.58 369.98 367.00 Z" })),
        React.createElement("g", { id: "#e8c86dff" },
            React.createElement("path", { fill: "#e8c86d", opacity: "1.00", d: " M 237.21 320.02 C 241.73 320.06 246.25 319.98 250.78 320.00 C 250.72 330.50 250.60 341.01 250.76 351.51 C 246.25 351.52 241.74 351.47 237.23 351.49 C 237.36 341.00 237.42 330.51 237.21 320.02 Z" })),
        React.createElement("g", { id: "#f6df7fff" },
            React.createElement("path", { fill: "#f6df7f", opacity: "1.00", d: " M 363.85 320.00 C 368.51 319.99 373.18 320.02 377.85 320.01 C 377.60 330.50 377.73 341.00 377.78 351.49 C 373.12 351.48 368.47 351.52 363.81 351.50 C 363.73 341.00 363.65 330.50 363.85 320.00 Z" })),
        React.createElement("g", { id: "#e9ca6eff" },
            React.createElement("path", { fill: "#e9ca6e", opacity: "1.00", d: " M 377.85 320.01 C 381.26 320.00 384.67 320.08 388.09 319.98 C 387.55 330.47 387.84 341.00 387.95 351.50 C 384.55 351.49 381.16 351.51 377.78 351.49 C 377.73 341.00 377.60 330.50 377.85 320.01 Z" })),
        React.createElement("g", { id: "#d8af5dff" },
            React.createElement("path", { fill: "#d8af5d", opacity: "1.00", d: " M 188.07 367.05 C 191.99 367.02 195.92 366.99 199.86 367.00 C 200.23 377.59 198.94 388.27 200.66 398.78 C 195.06 398.76 189.46 398.72 183.86 398.66 C 185.15 398.30 186.41 397.86 187.65 397.34 C 188.38 395.31 188.23 393.11 188.28 390.99 C 188.13 383.01 188.26 375.03 188.07 367.05 Z" })),
        React.createElement("g", { id: "#e1be66ff" },
            React.createElement("path", { fill: "#e1be66", opacity: "1.00", d: " M 199.86 367.00 C 201.92 367.00 203.99 367.00 206.06 367.01 C 206.05 377.58 206.08 388.16 206.04 398.74 C 204.24 398.75 202.45 398.76 200.66 398.78 C 198.94 388.27 200.23 377.59 199.86 367.00 Z" })),
        React.createElement("g", { id: "#e8c86cff" },
            React.createElement("path", { fill: "#e8c86c", opacity: "1.00", d: " M 206.06 367.01 C 208.37 367.00 210.68 367.00 212.99 367.00 C 213.14 377.58 212.88 388.17 213.05 398.75 C 210.71 398.75 208.37 398.74 206.04 398.74 C 206.08 388.16 206.05 377.58 206.06 367.01 Z" })),
        React.createElement("g", { id: "#efd374ff" },
            React.createElement("path", { fill: "#efd374", opacity: "1.00", d: " M 212.99 367.00 C 215.30 367.00 217.61 367.00 219.93 367.00 C 220.04 377.58 220.23 388.17 219.91 398.75 C 217.62 398.74 215.33 398.74 213.05 398.75 C 212.88 388.17 213.14 377.58 212.99 367.00 Z" })),
        React.createElement("g", { id: "#f6df7dff" },
            React.createElement("path", { fill: "#f6df7d", opacity: "1.00", d: " M 219.93 367.00 C 223.68 367.01 227.44 366.99 231.19 367.01 C 231.17 377.26 231.60 387.52 231.00 397.76 C 227.30 398.11 223.61 398.45 219.91 398.75 C 220.23 388.17 220.04 377.58 219.93 367.00 Z" })),
        React.createElement("g", { id: "#f6e793ff" },
            React.createElement("path", { fill: "#f6e793", opacity: "1.00", d: " M 231.19 367.01 C 239.06 367.03 246.93 366.98 254.80 367.00 C 254.74 372.33 254.76 377.66 254.75 382.99 C 254.75 388.09 254.23 393.29 255.60 398.27 L 255.73 398.71 C 243.79 398.85 231.85 398.65 219.91 398.75 C 223.61 398.45 227.30 398.11 231.00 397.76 C 231.60 387.52 231.17 377.26 231.19 367.01 Z" })),
        React.createElement("g", { id: "#f6f2b1ff" },
            React.createElement("path", { fill: "#f6f2b1", opacity: "1.00", d: " M 263.95 367.00 C 266.98 367.00 270.01 367.00 273.04 367.00 C 273.02 377.26 273.35 387.53 272.93 397.80 C 269.96 397.94 266.99 398.10 264.02 398.18 C 263.89 387.79 264.15 377.39 263.95 367.00 Z" })),
        React.createElement("g", { id: "#f6f0c0ff" },
            React.createElement("path", { fill: "#f6f0c0", opacity: "1.00", d: " M 273.04 367.00 C 294.66 366.99 316.28 367.01 337.89 367.01 C 337.86 377.27 337.63 387.53 338.11 397.78 C 340.73 397.86 343.36 397.98 345.98 398.23 C 347.38 398.36 348.80 398.49 350.21 398.62 C 318.72 398.87 287.22 398.74 255.73 398.71 L 255.60 398.27 C 258.41 398.27 261.22 398.25 264.02 398.18 C 266.99 398.10 269.96 397.94 272.93 397.80 C 273.35 387.53 273.02 377.26 273.04 367.00 Z" })),
        React.createElement("g", { id: "#f6e7b2ff" },
            React.createElement("path", { fill: "#f6e7b2", opacity: "1.00", d: " M 337.89 367.01 C 340.58 367.00 343.27 367.00 345.96 367.00 C 345.87 377.41 346.13 387.82 345.98 398.23 C 343.36 397.98 340.73 397.86 338.11 397.78 C 337.63 387.53 337.86 377.27 337.89 367.01 Z" })),
        React.createElement("g", { id: "#f6e5a5ff" },
            React.createElement("path", { fill: "#f6e5a5", opacity: "1.00", d: " M 345.96 367.00 C 348.62 367.00 351.29 367.00 353.96 367.00 C 353.93 377.60 353.84 388.21 353.99 398.81 C 352.72 398.77 351.47 398.71 350.21 398.62 C 348.80 398.49 347.38 398.36 345.98 398.23 C 346.13 387.82 345.87 377.41 345.96 367.00 Z" })),
        React.createElement("g", { id: "#f6e397ff" },
            React.createElement("path", { fill: "#f6e397", opacity: "1.00", d: " M 353.96 367.00 C 356.62 367.00 359.29 367.00 361.96 367.00 C 361.91 377.58 361.99 388.16 361.95 398.75 C 359.29 398.73 356.64 398.74 353.99 398.81 C 353.84 388.21 353.93 377.60 353.96 367.00 Z" })),
        React.createElement("g", { id: "#f6e08aff" },
            React.createElement("path", { fill: "#f6e08a", opacity: "1.00", d: " M 361.96 367.00 C 364.63 366.99 367.31 367.00 369.98 367.00 C 370.16 377.58 369.76 388.17 369.94 398.75 C 367.28 398.75 364.61 398.75 361.95 398.75 C 361.99 388.16 361.91 377.58 361.96 367.00 Z" })),
        React.createElement("g", { id: "#eed172ff" },
            React.createElement("path", { fill: "#eed172", opacity: "1.00", d: " M 378.99 367.00 C 381.64 367.00 384.29 367.01 386.95 367.01 C 386.90 377.58 386.81 388.17 387.02 398.74 C 384.35 398.74 381.69 398.75 379.03 398.75 C 378.85 388.17 378.87 377.58 378.99 367.00 Z" })),
        React.createElement("g", { id: "#e6c56aff" },
            React.createElement("path", { fill: "#e6c56a", opacity: "1.00", d: " M 386.95 367.01 C 389.31 367.00 391.68 367.00 394.06 367.00 C 393.81 377.58 394.01 388.17 393.95 398.75 C 391.63 398.74 389.32 398.74 387.02 398.74 C 386.81 388.17 386.90 377.58 386.95 367.01 Z" })),
        React.createElement("g", { id: "#deb964ff" },
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 394.06 367.00 C 396.74 367.00 399.42 367.01 402.10 367.00 C 402.14 377.58 402.25 388.17 401.95 398.75 C 399.28 398.74 396.61 398.75 393.95 398.75 C 394.01 388.17 393.81 377.58 394.06 367.00 Z" })),
        React.createElement("g", { id: "#d4a95aff" },
            React.createElement("path", { fill: "#d4a95a", opacity: "1.00", d: " M 402.10 367.00 C 406.03 366.98 409.95 367.03 413.88 367.03 C 413.73 377.23 413.53 387.45 414.01 397.65 C 417.09 397.96 420.17 398.35 423.26 398.53 C 416.16 398.84 409.05 398.70 401.95 398.75 C 402.25 388.17 402.14 377.58 402.10 367.00 Z" }))));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return React.createElement("img", __assign({ width: "32", height: "32", src: "/images/dry/logo.png" }, props));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 591 591" }, props),
        React.createElement("g", { id: "#343434ff" },
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 270.56 36.82 C 299.15 34.49 328.15 36.58 355.95 43.73 C 411.39 57.75 461.58 91.30 495.86 137.06 C 518.34 166.74 534.11 201.46 541.66 237.93 C 550.94 282.61 548.10 329.80 533.15 372.94 C 521.12 408.11 501.05 440.42 475.20 467.10 C 448.58 494.51 415.74 515.87 379.80 528.89 C 342.18 542.69 301.28 547.01 261.54 542.23 C 222.12 537.45 183.90 523.16 151.01 500.92 C 107.57 471.82 73.51 428.95 55.10 380.01 C 40.25 340.99 35.47 298.27 40.85 256.90 C 46.71 210.95 65.62 166.77 94.75 130.76 C 121.38 97.52 156.56 71.19 195.95 54.97 C 219.69 45.15 244.96 39.05 270.56 36.82 M 190.88 265.77 C 182.06 272.57 177.84 284.74 180.62 295.54 C 183.42 307.97 195.17 317.47 207.88 317.84 C 210.82 317.79 213.75 317.49 216.65 316.92 L 216.63 316.75 C 221.77 315.47 226.33 312.55 230.11 308.90 L 230.10 308.74 C 240.45 298.32 240.81 279.92 230.68 269.24 L 230.73 269.05 C 226.78 264.89 221.68 261.94 216.18 260.34 C 213.46 259.75 210.68 259.47 207.89 259.41 C 201.77 259.86 195.67 261.85 190.88 265.77 M 278.98 264.86 C 270.89 270.79 266.01 280.91 266.94 290.96 C 267.55 299.40 272.12 307.38 278.94 312.36 C 286.05 317.47 295.31 318.95 303.77 316.88 L 303.77 316.69 C 312.04 314.57 319.13 308.44 322.55 300.64 C 326.92 291.32 325.69 279.70 319.54 271.46 C 315.81 266.16 310.14 262.46 304.00 260.53 C 295.52 258.19 286.19 259.84 278.98 264.86 M 367.19 264.06 L 367.22 264.20 C 356.70 270.62 351.63 284.15 354.79 295.98 C 356.60 303.24 361.44 309.49 367.68 313.52 C 370.99 315.56 374.71 316.72 378.48 317.57 C 382.28 317.97 386.12 317.78 389.88 317.08 C 401.44 314.28 410.77 304.00 411.99 292.10 C 414.01 277.87 403.84 263.32 389.80 260.26 C 386.55 259.60 383.24 259.31 379.93 259.56 C 375.44 260.25 371.10 261.73 367.19 264.06 Z" })),
        React.createElement("g", { id: "#cb9b51ff" },
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 190.88 265.77 C 195.67 261.85 201.77 259.86 207.89 259.41 C 207.77 278.89 207.79 298.36 207.88 317.84 C 195.17 317.47 183.42 307.97 180.62 295.54 C 177.84 284.74 182.06 272.57 190.88 265.77 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 389.80 260.26 C 403.84 263.32 414.01 277.87 411.99 292.10 C 410.77 304.00 401.44 314.28 389.88 317.08 C 389.58 306.05 390.25 295.03 389.83 284.01 C 389.62 276.09 390.35 268.17 389.80 260.26 Z" })),
        React.createElement("g", { id: "#d6ac5bff" },
            React.createElement("path", { fill: "#d6ac5b", opacity: "1.00", d: " M 207.89 259.41 C 210.68 259.47 213.46 259.75 216.18 260.34 C 216.33 273.23 216.21 286.12 216.26 299.01 C 216.31 304.92 215.93 310.85 216.63 316.75 L 216.65 316.92 C 213.75 317.49 210.82 317.79 207.88 317.84 C 207.79 298.36 207.77 278.89 207.89 259.41 Z" })),
        React.createElement("g", { id: "#f6f5c0ff" },
            React.createElement("path", { fill: "#f6f5c0", opacity: "1.00", d: " M 278.98 264.86 C 286.19 259.84 295.52 258.19 304.00 260.53 C 303.79 279.25 304.23 297.97 303.77 316.69 L 303.77 316.88 C 295.31 318.95 286.05 317.47 278.94 312.36 C 279.03 296.53 279.06 280.70 278.98 264.86 Z" })),
        React.createElement("g", { id: "#e5c36aff" },
            React.createElement("path", { fill: "#e5c36a", opacity: "1.00", d: " M 367.19 264.06 C 371.10 261.73 375.44 260.25 379.93 259.56 C 379.68 275.02 379.84 290.49 379.87 305.95 C 379.70 309.81 380.99 314.21 378.48 317.57 C 374.71 316.72 370.99 315.56 367.68 313.52 C 368.78 303.38 367.96 293.16 368.13 282.98 C 368.07 276.71 368.85 270.34 367.22 264.20 L 367.19 264.06 Z" })),
        React.createElement("g", { id: "#d8b05eff" },
            React.createElement("path", { fill: "#d8b05e", opacity: "1.00", d: " M 379.93 259.56 C 383.24 259.31 386.55 259.60 389.80 260.26 C 390.35 268.17 389.62 276.09 389.83 284.01 C 390.25 295.03 389.58 306.05 389.88 317.08 C 386.12 317.78 382.28 317.97 378.48 317.57 C 380.99 314.21 379.70 309.81 379.87 305.95 C 379.84 290.49 379.68 275.02 379.93 259.56 Z" })),
        React.createElement("g", { id: "#e4c269ff" },
            React.createElement("path", { fill: "#e4c269", opacity: "1.00", d: " M 216.18 260.34 C 221.68 261.94 226.78 264.89 230.73 269.05 L 230.68 269.24 C 228.90 274.66 229.81 280.40 229.66 286.00 C 229.79 293.58 229.18 301.19 230.10 308.74 L 230.11 308.90 C 226.33 312.55 221.77 315.47 216.63 316.75 C 215.93 310.85 216.31 304.92 216.26 299.01 C 216.21 286.12 216.33 273.23 216.18 260.34 Z" })),
        React.createElement("g", { id: "#f6eec0ff" },
            React.createElement("path", { fill: "#f6eec0", opacity: "1.00", d: " M 304.00 260.53 C 310.14 262.46 315.81 266.16 319.54 271.46 C 325.69 279.70 326.92 291.32 322.55 300.64 C 319.13 308.44 312.04 314.57 303.77 316.69 C 304.23 297.97 303.79 279.25 304.00 260.53 Z" })),
        React.createElement("g", { id: "#f6f2b3ff" },
            React.createElement("path", { fill: "#f6f2b3", opacity: "1.00", d: " M 266.94 290.96 C 266.01 280.91 270.89 270.79 278.98 264.86 C 279.06 280.70 279.03 296.53 278.94 312.36 C 272.12 307.38 267.55 299.40 266.94 290.96 Z" })),
        React.createElement("g", { id: "#f4db78ff" },
            React.createElement("path", { fill: "#f4db78", opacity: "1.00", d: " M 354.79 295.98 C 351.63 284.15 356.70 270.62 367.22 264.20 C 368.85 270.34 368.07 276.71 368.13 282.98 C 367.96 293.16 368.78 303.38 367.68 313.52 C 361.44 309.49 356.60 303.24 354.79 295.98 Z" })),
        React.createElement("g", { id: "#f3d977ff" },
            React.createElement("path", { fill: "#f3d977", opacity: "1.00", d: " M 229.66 286.00 C 229.81 280.40 228.90 274.66 230.68 269.24 C 240.81 279.92 240.45 298.32 230.10 308.74 C 229.18 301.19 229.79 293.58 229.66 286.00 Z" }))));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 591 591" }, props),
        React.createElement("g", { id: "#343434ff" },
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 270.58 36.82 C 303.33 34.11 336.65 37.36 368.06 47.16 C 418.92 62.77 464.48 94.97 496.28 137.62 C 521.80 171.49 538.55 211.89 544.44 253.88 C 550.61 297.12 545.58 341.96 529.60 382.63 C 515.11 419.78 491.63 453.38 461.84 479.87 C 435.41 503.47 403.96 521.41 370.21 532.18 C 326.30 546.19 278.58 547.86 233.75 537.24 C 195.02 528.07 158.58 509.52 128.29 483.72 C 82.67 445.16 51.35 390.05 42.00 331.02 C 34.91 287.19 39.30 241.48 55.11 199.96 C 71.52 156.40 100.29 117.62 137.09 89.14 C 175.31 59.33 222.27 40.90 270.58 36.82 M 385.72 180.98 L 385.75 181.22 C 383.92 182.68 381.89 184.40 381.85 186.96 C 381.43 196.15 382.12 205.39 381.53 214.58 C 377.63 214.49 373.74 214.48 369.84 214.50 C 365.18 214.51 360.52 214.48 355.86 214.50 C 350.83 214.51 345.80 214.48 340.78 214.50 C 328.20 214.51 315.61 214.49 303.03 214.50 C 290.10 214.50 277.16 214.50 264.23 214.50 C 256.23 214.47 248.23 214.53 240.23 214.50 C 232.26 214.46 224.28 214.53 216.31 214.49 C 210.82 214.45 205.33 214.55 199.84 214.50 C 194.81 214.46 189.78 214.53 184.75 214.51 C 177.91 214.70 169.81 213.03 164.42 218.41 C 157.48 224.27 158.20 236.28 165.59 241.45 C 171.07 245.70 178.37 243.91 184.76 244.24 C 189.93 244.23 195.09 244.27 200.26 244.25 C 205.61 244.23 210.96 244.27 216.31 244.25 C 224.29 244.24 232.27 244.27 240.25 244.25 C 248.24 244.24 256.23 244.27 264.22 244.25 C 277.17 244.25 290.11 244.25 303.06 244.25 C 315.63 244.26 328.21 244.24 340.79 244.25 C 345.80 244.26 350.82 244.24 355.83 244.25 C 360.51 244.26 365.19 244.24 369.87 244.25 C 373.75 244.28 377.64 244.26 381.52 244.16 C 382.15 253.41 381.40 262.70 381.86 271.95 C 381.85 274.45 383.88 276.05 385.64 277.48 L 385.59 277.87 C 388.09 278.08 390.94 278.84 393.13 277.15 C 396.47 274.60 399.11 271.28 402.16 268.40 C 405.28 265.42 408.27 262.31 411.33 259.27 C 419.52 251.12 427.68 242.96 435.83 234.77 C 438.88 232.06 438.95 226.81 435.92 224.06 C 427.78 215.90 419.64 207.75 411.47 199.62 C 408.44 196.60 405.46 193.53 402.39 190.57 C 399.32 187.66 396.61 184.36 393.32 181.71 C 391.10 180.05 388.24 180.55 385.72 180.98 M 189.06 303.55 C 185.68 306.91 182.33 310.31 178.97 313.70 C 169.37 323.22 159.81 332.78 150.29 342.37 C 147.33 345.09 146.93 350.21 149.93 353.04 C 159.62 362.78 169.34 372.48 179.07 382.18 C 182.42 385.54 185.76 388.91 189.12 392.26 C 191.08 394.14 193.02 396.65 195.99 396.74 C 200.31 397.31 204.69 393.51 204.26 389.06 C 204.22 380.28 204.44 371.50 204.12 362.73 C 213.50 362.71 222.88 362.94 232.26 362.72 C 241.57 362.67 250.89 362.93 260.21 362.64 C 264.42 362.96 268.65 362.67 272.87 362.76 C 284.27 362.76 295.66 362.74 307.06 362.75 C 318.48 362.77 329.89 362.72 341.31 362.75 C 349.58 362.72 357.86 362.86 366.13 362.61 C 373.83 362.94 381.57 362.69 389.28 362.61 C 397.57 363.01 405.87 362.68 414.17 362.63 C 417.48 362.02 420.55 360.25 422.78 357.73 C 427.94 352.03 427.58 342.38 421.89 337.17 C 418.39 333.47 413.10 332.62 408.23 332.98 C 404.53 333.04 400.83 332.98 397.13 333.00 C 394.76 333.00 392.40 333.00 390.04 333.00 C 387.61 333.00 385.17 333.00 382.75 333.02 C 376.07 333.05 369.40 332.96 362.73 333.01 C 355.58 333.03 348.44 332.97 341.29 333.01 C 329.87 333.02 318.44 332.98 307.02 333.00 C 295.65 333.01 284.29 332.99 272.92 333.00 C 267.21 332.98 261.50 333.03 255.80 333.00 C 248.27 332.98 240.74 333.03 233.21 333.01 C 230.16 332.99 227.10 333.00 224.05 333.00 C 221.00 332.99 217.95 333.01 214.90 333.00 C 211.31 332.99 207.72 333.01 204.13 333.04 C 204.40 324.02 204.28 314.98 204.21 305.96 C 204.26 301.76 199.97 298.45 195.93 299.04 C 193.01 299.30 191.04 301.67 189.06 303.55 Z" })),
        React.createElement("g", { id: "#e2bf67ff" },
            React.createElement("path", { fill: "#e2bf67", opacity: "1.00", d: " M 385.72 180.98 C 388.24 180.55 391.10 180.05 393.32 181.71 C 396.61 184.36 399.32 187.66 402.39 190.57 C 401.93 194.35 401.56 198.16 401.58 201.98 C 401.71 217.98 401.61 233.99 401.65 250.00 C 401.57 256.14 401.51 262.29 402.16 268.40 C 399.11 271.28 396.47 274.60 393.13 277.15 C 390.94 278.84 388.09 278.08 385.59 277.87 L 385.64 277.48 C 386.05 274.33 386.39 271.17 386.41 268.00 C 386.25 246.99 386.43 225.97 386.33 204.96 C 386.22 197.04 386.78 189.09 385.75 181.22 L 385.72 180.98 Z" }),
            React.createElement("path", { fill: "#e2bf67", opacity: "1.00", d: " M 390.04 333.00 C 392.40 333.00 394.76 333.00 397.13 333.00 C 397.10 342.54 397.51 352.09 396.89 361.62 C 394.67 361.91 392.45 362.25 390.23 362.51 C 389.89 352.68 389.91 342.83 390.04 333.00 Z" })),
        React.createElement("g", { id: "#edcf71ff" },
            React.createElement("path", { fill: "#edcf71", opacity: "1.00", d: " M 381.85 186.96 C 381.89 184.40 383.92 182.68 385.75 181.22 C 386.78 189.09 386.22 197.04 386.33 204.96 C 386.43 225.97 386.25 246.99 386.41 268.00 C 386.39 271.17 386.05 274.33 385.64 277.48 C 383.88 276.05 381.85 274.45 381.86 271.95 C 381.40 262.70 382.15 253.41 381.52 244.16 C 380.31 234.36 380.37 224.38 381.53 214.58 C 382.12 205.39 381.43 196.15 381.85 186.96 Z" })),
        React.createElement("g", { id: "#d5ab5bff" },
            React.createElement("path", { fill: "#d5ab5b", opacity: "1.00", d: " M 402.39 190.57 C 405.46 193.53 408.44 196.60 411.47 199.62 C 410.90 219.50 411.18 239.39 411.33 259.27 C 408.27 262.31 405.28 265.42 402.16 268.40 C 401.51 262.29 401.57 256.14 401.65 250.00 C 401.61 233.99 401.71 217.98 401.58 201.98 C 401.56 198.16 401.93 194.35 402.39 190.57 Z" })),
        React.createElement("g", { id: "#cb9b51ff" },
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 411.47 199.62 C 419.64 207.75 427.78 215.90 435.92 224.06 C 438.95 226.81 438.88 232.06 435.83 234.77 C 427.68 242.96 419.52 251.12 411.33 259.27 C 411.18 239.39 410.90 219.50 411.47 199.62 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 164.42 218.41 C 169.81 213.03 177.91 214.70 184.75 214.51 C 184.67 224.42 184.64 234.33 184.76 244.24 C 178.37 243.91 171.07 245.70 165.59 241.45 C 158.20 236.28 157.48 224.27 164.42 218.41 Z" }),
            React.createElement("path", { fill: "#cb9b51", opacity: "1.00", d: " M 150.29 342.37 C 159.81 332.78 169.37 323.22 178.97 313.70 C 179.46 336.52 179.27 359.35 179.07 382.18 C 169.34 372.48 159.62 362.78 149.93 353.04 C 146.93 350.21 147.33 345.09 150.29 342.37 Z" })),
        React.createElement("g", { id: "#dbb460ff" },
            React.createElement("path", { fill: "#dbb460", opacity: "1.00", d: " M 184.75 214.51 C 189.78 214.53 194.81 214.46 199.84 214.50 C 200.70 224.39 200.25 234.33 200.26 244.25 C 195.09 244.27 189.93 244.23 184.76 244.24 C 184.64 234.33 184.67 224.42 184.75 214.51 Z" })),
        React.createElement("g", { id: "#ecce70ff" },
            React.createElement("path", { fill: "#ecce70", opacity: "1.00", d: " M 199.84 214.50 C 205.33 214.55 210.82 214.45 216.31 214.49 C 215.85 224.42 215.92 234.33 216.31 244.25 C 210.96 244.27 205.61 244.23 200.26 244.25 C 200.25 234.33 200.70 224.39 199.84 214.50 Z" })),
        React.createElement("g", { id: "#f6e286ff" },
            React.createElement("path", { fill: "#f6e286", opacity: "1.00", d: " M 216.31 214.49 C 224.28 214.53 232.26 214.46 240.23 214.50 C 240.36 224.42 240.30 234.33 240.25 244.25 C 232.27 244.27 224.29 244.24 216.31 244.25 C 215.92 234.33 215.85 224.42 216.31 214.49 Z" }),
            React.createElement("path", { fill: "#f6e286", opacity: "1.00", d: " M 224.05 333.00 C 227.10 333.00 230.16 332.99 233.21 333.01 C 232.89 342.74 234.37 352.65 232.39 362.25 C 229.59 362.27 226.80 362.28 224.01 362.22 C 223.95 352.48 224.03 342.74 224.05 333.00 Z" })),
        React.createElement("g", { id: "#f6eca3ff" },
            React.createElement("path", { fill: "#f6eca3", opacity: "1.00", d: " M 240.23 214.50 C 248.23 214.53 256.23 214.47 264.23 214.50 C 264.22 224.42 264.36 234.33 264.22 244.25 C 256.23 244.27 248.24 244.24 240.25 244.25 C 240.30 234.33 240.36 224.42 240.23 214.50 Z" })),
        React.createElement("g", { id: "#f6f4c0ff" },
            React.createElement("path", { fill: "#f6f4c0", opacity: "1.00", d: " M 264.23 214.50 C 277.16 214.50 290.10 214.50 303.03 214.50 C 303.06 224.42 302.96 234.33 303.06 244.25 C 290.11 244.25 277.17 244.25 264.22 244.25 C 264.36 234.33 264.22 224.42 264.23 214.50 Z" }),
            React.createElement("path", { fill: "#f6f4c0", opacity: "1.00", d: " M 272.92 333.00 C 284.29 332.99 295.65 333.01 307.02 333.00 C 307.09 342.92 306.79 352.83 307.06 362.75 C 295.66 362.74 284.27 362.76 272.87 362.76 C 272.87 352.84 272.77 342.92 272.92 333.00 Z" })),
        React.createElement("g", { id: "#f6ecc0ff" },
            React.createElement("path", { fill: "#f6ecc0", opacity: "1.00", d: " M 303.03 214.50 C 315.61 214.49 328.20 214.51 340.78 214.50 C 340.67 224.42 340.68 234.33 340.79 244.25 C 328.21 244.24 315.63 244.26 303.06 244.25 C 302.96 234.33 303.06 224.42 303.03 214.50 Z" })),
        React.createElement("g", { id: "#f6e5a4ff" },
            React.createElement("path", { fill: "#f6e5a4", opacity: "1.00", d: " M 340.78 214.50 C 345.80 214.48 350.83 214.51 355.86 214.50 C 355.73 224.42 355.80 234.33 355.83 244.25 C 350.82 244.24 345.80 244.26 340.79 244.25 C 340.68 234.33 340.67 224.42 340.78 214.50 Z" })),
        React.createElement("g", { id: "#f6e18dff" },
            React.createElement("path", { fill: "#f6e18d", opacity: "1.00", d: " M 355.86 214.50 C 360.52 214.48 365.18 214.51 369.84 214.50 C 369.79 224.42 369.76 234.33 369.87 244.25 C 365.19 244.24 360.51 244.26 355.83 244.25 C 355.80 234.33 355.73 224.42 355.86 214.50 Z" })),
        React.createElement("g", { id: "#f5dc79ff" },
            React.createElement("path", { fill: "#f5dc79", opacity: "1.00", d: " M 369.84 214.50 C 373.74 214.48 377.63 214.49 381.53 214.58 C 380.37 224.38 380.31 234.36 381.52 244.16 C 377.64 244.26 373.75 244.28 369.87 244.25 C 369.76 234.33 369.79 224.42 369.84 214.50 Z" })),
        React.createElement("g", { id: "#dfbb64ff" },
            React.createElement("path", { fill: "#dfbb64", opacity: "1.00", d: " M 189.06 303.55 C 191.04 301.67 193.01 299.30 195.93 299.04 C 199.97 298.45 204.26 301.76 204.21 305.96 C 204.28 314.98 204.40 324.02 204.13 333.04 C 203.45 342.92 203.43 352.85 204.12 362.73 C 204.44 371.50 204.22 380.28 204.26 389.06 C 204.69 393.51 200.31 397.31 195.99 396.74 C 193.02 396.65 191.08 394.14 189.12 392.26 C 189.53 369.51 189.23 346.75 189.33 323.99 C 189.34 317.18 189.44 310.36 189.06 303.55 Z" })),
        React.createElement("g", { id: "#d3a758ff" },
            React.createElement("path", { fill: "#d3a758", opacity: "1.00", d: " M 178.97 313.70 C 182.33 310.31 185.68 306.91 189.06 303.55 C 189.44 310.36 189.34 317.18 189.33 323.99 C 189.23 346.75 189.53 369.51 189.12 392.26 C 185.76 388.91 182.42 385.54 179.07 382.18 C 179.27 359.35 179.46 336.52 178.97 313.70 Z" })),
        React.createElement("g", { id: "#edd071ff" },
            React.createElement("path", { fill: "#edd071", opacity: "1.00", d: " M 204.13 333.04 C 207.72 333.01 211.31 332.99 214.90 333.00 C 214.87 342.59 214.45 352.20 215.12 361.78 C 218.08 361.97 221.04 362.15 224.01 362.22 C 226.80 362.28 229.59 362.27 232.39 362.25 L 232.26 362.72 C 222.88 362.94 213.50 362.71 204.12 362.73 C 203.43 352.85 203.45 342.92 204.13 333.04 Z" })),
        React.createElement("g", { id: "#f6df7cff" },
            React.createElement("path", { fill: "#f6df7c", opacity: "1.00", d: " M 214.90 333.00 C 217.95 333.01 221.00 332.99 224.05 333.00 C 224.03 342.74 223.95 352.48 224.01 362.22 C 221.04 362.15 218.08 361.97 215.12 361.78 C 214.45 352.20 214.87 342.59 214.90 333.00 Z" })),
        React.createElement("g", { id: "#f6e999ff" },
            React.createElement("path", { fill: "#f6e999", opacity: "1.00", d: " M 233.21 333.01 C 240.74 333.03 248.27 332.98 255.80 333.00 C 255.89 342.54 255.27 352.10 256.12 361.61 C 257.47 361.97 258.84 362.31 260.21 362.64 C 250.89 362.93 241.57 362.67 232.26 362.72 L 232.39 362.25 C 234.37 352.65 232.89 342.74 233.21 333.01 Z" })),
        React.createElement("g", { id: "#f6f2b1ff" },
            React.createElement("path", { fill: "#f6f2b1", opacity: "1.00", d: " M 255.80 333.00 C 261.50 333.03 267.21 332.98 272.92 333.00 C 272.77 342.92 272.87 352.84 272.87 362.76 C 268.65 362.67 264.42 362.96 260.21 362.64 C 258.84 362.31 257.47 361.97 256.12 361.61 C 255.27 352.10 255.89 342.54 255.80 333.00 Z" })),
        React.createElement("g", { id: "#f6ebc0ff" },
            React.createElement("path", { fill: "#f6ebc0", opacity: "1.00", d: " M 307.02 333.00 C 318.44 332.98 329.87 333.02 341.29 333.01 C 341.41 342.92 341.39 352.83 341.31 362.75 C 329.89 362.72 318.48 362.77 307.06 362.75 C 306.79 352.83 307.09 342.92 307.02 333.00 Z" })),
        React.createElement("g", { id: "#f6e49eff" },
            React.createElement("path", { fill: "#f6e49e", opacity: "1.00", d: " M 341.29 333.01 C 348.44 332.97 355.58 333.03 362.73 333.01 C 362.76 342.55 362.24 352.13 363.33 361.63 C 364.26 361.97 365.19 362.29 366.13 362.61 C 357.86 362.86 349.58 362.72 341.31 362.75 C 341.39 352.83 341.41 342.92 341.29 333.01 Z" })),
        React.createElement("g", { id: "#f6de7bff" },
            React.createElement("path", { fill: "#f6de7b", opacity: "1.00", d: " M 362.73 333.01 C 369.40 332.96 376.07 333.05 382.75 333.02 C 382.58 342.58 382.29 352.15 382.86 361.69 C 385.32 361.95 387.77 362.23 390.23 362.51 L 389.28 362.61 C 381.57 362.69 373.83 362.94 366.13 362.61 C 365.19 362.29 364.26 361.97 363.33 361.63 C 362.24 352.13 362.76 342.55 362.73 333.01 Z" })),
        React.createElement("g", { id: "#e9ca6eff" },
            React.createElement("path", { fill: "#e9ca6e", opacity: "1.00", d: " M 382.75 333.02 C 385.17 333.00 387.61 333.00 390.04 333.00 C 389.91 342.83 389.89 352.68 390.23 362.51 C 387.77 362.23 385.32 361.95 382.86 361.69 C 382.29 352.15 382.58 342.58 382.75 333.02 Z" })),
        React.createElement("g", { id: "#d9b15fff" },
            React.createElement("path", { fill: "#d9b15f", opacity: "1.00", d: " M 397.13 333.00 C 400.83 332.98 404.53 333.04 408.23 332.98 C 408.42 342.49 408.12 352.00 408.34 361.51 C 410.28 361.91 412.21 362.31 414.17 362.63 C 405.87 362.68 397.57 363.01 389.28 362.61 L 390.23 362.51 C 392.45 362.25 394.67 361.91 396.89 361.62 C 397.51 352.09 397.10 342.54 397.13 333.00 Z" })),
        React.createElement("g", { id: "#cc9d52ff" },
            React.createElement("path", { fill: "#cc9d52", opacity: "1.00", d: " M 408.23 332.98 C 413.10 332.62 418.39 333.47 421.89 337.17 C 427.58 342.38 427.94 352.03 422.78 357.73 C 420.55 360.25 417.48 362.02 414.17 362.63 C 412.21 362.31 410.28 361.91 408.34 361.51 C 408.12 352.00 408.42 342.49 408.23 332.98 Z" }))));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 1232 1232" }, props),
        React.createElement("g", { id: "#343434ff" },
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 597.17 75.17 C 680.11 73.04 763.54 90.62 838.37 126.54 C 896.22 154.17 948.91 192.49 993.16 238.86 C 1054.32 302.81 1099.14 382.30 1121.78 467.87 C 1145.37 556.52 1145.42 651.32 1121.94 740.01 C 1102.85 812.42 1067.96 880.58 1020.59 938.57 C 974.72 994.82 917.25 1041.57 852.72 1074.82 C 781.04 1111.93 700.72 1132.07 620.02 1133.38 C 535.91 1135.06 451.41 1116.39 376.04 1078.96 C 329.67 1056.09 286.75 1026.31 248.99 991.02 C 200.04 945.32 159.83 890.28 131.29 829.69 C 95.57 754.16 78.45 670.04 81.33 586.57 C 82.89 538.22 91.08 490.08 105.73 443.97 C 125.26 382.30 156.36 324.33 196.80 273.84 C 244.37 214.33 304.88 165.17 373.03 131.05 C 442.35 96.07 519.55 76.98 597.17 75.17 M 332.02 283.95 C 332.00 494.64 332.02 705.34 332.01 916.03 C 332.15 921.57 331.38 927.33 333.42 932.64 C 336.54 941.54 345.50 948.09 354.99 948.00 C 373.90 947.96 392.82 948.03 411.74 947.99 C 423.23 947.94 434.71 948.06 446.20 947.98 C 470.54 947.95 494.88 948.05 519.22 947.99 C 589.70 948.00 660.18 948.01 730.67 947.97 C 747.54 948.07 764.42 947.93 781.29 947.99 C 799.78 948.07 818.26 947.91 836.75 947.94 C 846.17 948.09 855.60 947.92 865.03 948.01 C 874.26 948.25 883.20 942.25 886.66 933.72 C 888.73 929.10 888.55 923.94 888.50 919.01 C 888.49 707.34 888.50 495.68 888.49 284.02 C 888.87 272.14 878.84 261.15 866.96 260.54 C 856.55 260.45 846.15 260.48 835.74 260.52 C 818.25 260.60 800.76 260.37 783.27 260.49 C 762.60 260.56 741.92 260.42 721.25 260.50 C 656.74 260.49 592.24 260.48 527.74 260.50 C 500.58 260.42 473.42 260.55 446.26 260.51 C 435.07 260.36 423.89 260.59 412.70 260.48 C 393.14 260.45 373.58 260.51 354.02 260.51 C 341.96 260.86 331.72 271.94 332.02 283.95 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 455.06 297.72 C 479.28 297.75 503.51 297.83 527.74 297.76 C 596.27 297.77 664.81 297.76 733.34 297.73 C 743.93 297.85 754.52 297.71 765.11 297.75 C 771.11 297.79 777.15 298.99 782.61 301.55 C 790.39 305.19 797.15 311.02 801.62 318.38 C 808.12 328.90 809.68 342.29 805.82 354.04 C 802.62 364.26 795.29 372.95 786.06 378.29 C 777.95 383.19 768.27 384.23 758.98 383.88 C 750.21 383.87 741.43 383.86 732.66 383.88 C 664.37 383.87 596.08 383.87 527.79 383.87 C 504.18 383.86 480.56 383.88 456.94 383.88 C 450.24 383.94 443.44 382.80 437.40 379.83 C 426.86 374.82 418.38 365.53 414.79 354.39 C 412.37 346.71 412.07 338.44 413.79 330.58 C 417.42 314.85 430.70 302.10 446.43 298.72 C 449.26 298.09 452.15 297.75 455.06 297.72 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 397.20 421.18 C 402.52 419.40 408.19 419.76 413.72 419.65 C 421.60 419.52 429.49 419.75 437.38 419.60 C 467.49 419.55 497.60 419.72 527.72 419.63 C 596.04 419.65 664.37 419.63 732.70 419.61 C 750.74 419.71 768.78 419.53 786.81 419.62 C 795.88 419.78 804.95 419.54 814.02 419.65 C 821.69 419.73 829.28 422.63 835.03 427.72 C 841.79 433.86 846.12 442.77 846.01 451.98 C 845.98 586.32 846.03 720.67 845.99 855.02 C 845.87 863.41 842.01 871.48 836.07 877.33 C 830.25 883.05 822.16 886.33 814.01 886.38 C 803.11 886.41 792.21 886.23 781.31 886.36 C 764.43 886.47 747.55 886.28 730.67 886.39 C 660.19 886.37 589.70 886.35 519.22 886.38 C 494.88 886.28 470.54 886.45 446.21 886.38 C 434.73 886.22 423.26 886.48 411.78 886.36 C 407.17 886.29 402.45 886.47 397.99 885.11 C 388.03 882.34 379.73 874.45 376.32 864.71 C 373.75 858.10 374.64 850.91 374.50 843.99 C 374.49 715.65 374.50 587.32 374.49 458.98 C 374.50 453.31 374.09 447.46 376.09 442.05 C 379.25 432.24 387.34 424.21 397.20 421.18 M 424.76 494.19 C 424.44 509.83 424.72 525.48 424.62 541.12 C 426.99 541.12 429.37 541.13 431.75 541.13 C 432.40 541.13 433.70 541.12 434.35 541.12 C 436.03 541.12 437.71 541.12 439.40 541.12 C 446.74 541.14 454.08 541.12 461.42 541.12 C 463.22 541.12 465.03 541.13 466.84 541.13 C 468.35 541.12 469.86 541.12 471.38 541.13 C 471.44 525.58 471.23 510.04 471.49 494.50 C 467.04 493.97 462.53 494.06 458.08 494.26 C 452.49 494.27 446.90 494.16 441.32 494.29 C 435.80 493.91 430.28 494.34 424.76 494.19 M 497.62 505.54 C 492.49 511.91 492.01 521.61 496.66 528.37 C 500.14 533.83 506.52 537.21 512.99 537.13 C 520.40 537.11 527.81 537.14 535.22 537.12 C 543.58 537.11 551.93 537.15 560.29 537.12 C 577.75 537.12 595.22 537.15 612.68 537.13 C 652.35 537.13 692.01 537.13 731.68 537.12 C 741.89 537.15 752.09 537.11 762.30 537.13 C 771.26 537.16 780.22 537.11 789.18 537.12 C 795.09 537.13 801.00 537.14 806.92 537.12 C 819.36 537.35 829.16 523.72 825.11 511.97 C 822.88 504.11 815.22 498.24 807.04 498.15 C 796.95 498.16 786.85 497.85 776.77 498.18 C 769.08 498.01 761.38 497.87 753.70 498.19 C 743.04 498.13 732.36 497.92 721.70 498.24 C 689.23 498.04 656.75 498.03 624.28 498.20 C 605.00 497.97 585.71 498.05 566.43 498.25 C 559.07 497.83 551.68 498.10 544.31 498.22 C 534.22 497.82 524.10 498.29 514.00 498.11 C 507.77 497.82 501.45 500.59 497.62 505.54 M 424.61 583.49 C 424.65 599.08 424.60 614.67 424.63 630.26 C 426.99 630.24 429.35 630.25 431.71 630.26 C 432.36 630.26 433.67 630.25 434.32 630.25 C 436.02 630.24 437.72 630.24 439.43 630.25 C 446.76 630.28 454.08 630.23 461.41 630.25 C 463.21 630.25 465.02 630.25 466.83 630.25 C 468.35 630.24 469.86 630.24 471.39 630.25 C 471.37 614.66 471.36 599.07 471.39 583.48 C 469.86 583.48 468.34 583.49 466.83 583.51 C 465.35 583.49 463.88 583.48 462.41 583.48 C 460.71 583.48 459.02 583.49 457.32 583.50 C 452.40 583.49 447.49 583.48 442.57 583.48 C 439.92 583.47 437.27 583.48 434.63 583.50 C 433.90 583.50 432.42 583.48 431.69 583.48 C 429.32 583.48 426.96 583.48 424.61 583.49 M 496.70 595.67 C 492.53 601.82 492.34 610.43 496.31 616.73 C 499.74 622.44 506.29 626.10 512.96 626.00 C 520.37 625.95 527.78 626.05 535.20 625.96 C 543.55 625.88 551.91 626.10 560.27 625.97 C 577.74 625.97 595.21 626.03 612.68 626.00 C 651.03 626.00 689.37 626.01 727.72 625.98 C 737.94 626.04 748.17 625.97 758.40 626.00 C 769.23 626.03 780.06 625.96 790.90 625.97 C 797.18 625.92 803.49 626.25 809.76 625.76 C 818.66 624.38 825.92 616.10 825.92 607.05 C 826.36 598.40 820.24 590.04 811.90 587.77 C 805.03 586.23 797.87 587.30 790.88 587.03 C 780.05 587.04 769.21 586.97 758.38 587.00 C 748.31 587.03 738.24 586.96 728.18 587.02 C 689.67 587.00 651.16 587.00 612.66 587.00 C 595.18 586.97 577.69 587.03 560.22 587.03 C 551.87 586.89 543.52 587.12 535.17 587.04 C 527.77 586.94 520.37 587.03 512.97 587.01 C 506.55 586.93 500.23 590.32 496.70 595.67 M 484.33 666.16 L 484.37 666.31 C 482.34 667.27 480.33 668.26 478.30 669.22 L 478.38 669.54 C 476.31 670.48 474.34 671.62 472.42 672.84 C 468.82 675.08 465.29 677.43 461.78 679.82 C 460.71 680.68 459.27 680.36 458.02 680.43 C 451.83 680.30 445.64 680.37 439.45 680.39 C 437.46 680.37 435.47 680.38 433.49 680.34 C 430.55 680.27 427.62 680.37 424.69 680.39 C 424.61 681.16 424.43 682.72 424.34 683.50 C 421.33 681.80 418.33 680.03 415.08 678.85 C 417.32 682.88 419.91 686.71 422.68 690.40 C 423.62 691.75 424.92 693.12 424.64 694.92 C 424.61 705.65 424.63 716.39 424.62 727.13 C 427.58 727.12 430.55 727.13 433.52 727.13 C 435.49 727.12 437.47 727.12 439.45 727.12 C 446.13 727.13 452.81 727.13 459.49 727.12 C 460.36 727.12 462.11 727.12 462.98 727.13 C 464.26 727.12 465.54 727.12 466.83 727.12 C 468.34 727.12 469.86 727.12 471.38 727.13 C 471.27 714.21 471.58 701.27 471.22 688.35 C 471.74 687.85 472.27 687.36 472.79 686.87 L 472.78 686.73 C 475.16 684.73 477.21 682.40 479.40 680.20 C 481.59 677.99 483.55 675.57 485.61 673.26 C 488.45 669.73 491.26 666.17 493.65 662.32 C 490.40 663.24 487.41 664.81 484.33 666.16 M 506.97 685.16 C 501.65 686.78 497.19 690.88 495.03 695.99 C 492.16 702.52 493.27 710.59 497.84 716.09 C 501.47 720.57 507.16 723.25 512.94 723.24 C 520.68 723.25 528.43 723.26 536.17 723.24 C 545.37 723.21 554.56 723.31 563.76 723.25 C 577.59 723.22 591.43 723.29 605.26 723.25 C 647.41 723.26 689.55 723.26 731.69 723.24 C 741.57 723.29 751.45 723.22 761.33 723.26 C 771.81 723.32 782.29 723.20 792.78 723.24 C 797.51 723.24 802.24 723.29 806.98 723.22 C 813.42 723.09 819.69 719.55 823.03 714.02 C 826.82 707.99 826.90 699.86 823.23 693.76 C 819.75 687.78 812.90 683.96 805.98 684.24 C 799.93 684.33 793.88 684.04 787.85 684.32 C 779.01 684.25 770.18 684.11 761.35 684.23 C 751.46 684.35 741.56 684.14 731.67 684.26 C 689.53 684.24 647.39 684.22 605.25 684.25 C 591.42 684.13 577.58 684.33 563.75 684.24 C 556.61 684.12 549.46 684.22 542.32 684.32 C 534.55 684.01 526.77 684.36 518.99 684.25 C 514.98 684.34 510.83 683.80 506.97 685.16 M 424.49 766.53 C 424.80 782.05 424.54 797.59 424.62 813.12 C 426.98 813.12 429.34 813.12 431.70 813.13 C 432.35 813.13 433.67 813.13 434.32 813.12 C 436.02 813.12 437.71 813.11 439.42 813.12 C 446.75 813.14 454.08 813.12 461.42 813.12 C 463.21 813.12 465.01 813.12 466.82 813.13 C 468.33 813.12 469.85 813.12 471.37 813.13 C 471.28 797.49 471.58 781.83 471.22 766.20 C 467.20 766.14 463.15 766.39 459.16 765.75 C 458.95 765.95 458.51 766.34 458.30 766.53 L 457.59 766.20 C 452.15 766.31 446.71 766.14 441.27 766.29 C 435.68 766.10 430.05 765.93 424.49 766.53 M 495.37 781.35 C 491.87 788.41 493.24 797.56 498.76 803.21 C 502.38 807.15 507.68 809.35 513.03 809.35 C 520.43 809.40 527.83 809.39 535.24 809.37 C 543.59 809.30 551.93 809.47 560.28 809.37 C 575.26 809.34 590.25 809.44 605.24 809.37 C 647.39 809.39 689.54 809.38 731.70 809.37 C 743.69 809.43 755.68 809.32 767.68 809.36 C 774.84 809.46 782.00 809.31 789.16 809.38 C 795.09 809.40 801.03 809.43 806.97 809.33 C 814.68 809.23 821.99 804.04 824.66 796.81 C 827.33 789.99 825.76 781.69 820.63 776.44 C 816.93 772.40 811.43 770.14 805.97 770.35 C 800.37 770.43 794.78 770.24 789.19 770.37 C 782.02 770.49 774.86 770.23 767.70 770.39 C 755.69 770.46 743.68 770.28 731.68 770.39 C 689.54 770.37 647.39 770.35 605.25 770.38 C 590.26 770.27 575.26 770.44 560.27 770.39 C 551.92 770.23 543.56 770.50 535.21 770.40 C 527.79 770.29 520.37 770.41 512.95 770.35 C 505.59 770.15 498.47 774.72 495.37 781.35 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 433.10 503.08 C 433.49 502.95 434.28 502.70 434.67 502.57 C 436.24 502.57 437.82 502.59 439.39 502.61 C 445.35 502.65 451.30 502.62 457.26 502.64 C 459.09 502.63 460.92 502.57 462.77 502.52 C 463.25 512.41 462.91 522.33 462.96 532.23 C 462.69 532.39 462.14 532.71 461.86 532.87 C 454.37 532.63 446.88 532.79 439.39 532.74 C 437.40 532.74 435.41 532.80 433.43 532.88 C 432.64 529.64 433.08 526.27 433.00 522.98 C 433.09 516.34 432.83 509.70 433.10 503.08 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 433.01 591.97 C 434.70 591.96 436.39 591.95 438.09 591.94 C 438.55 591.93 439.46 591.91 439.91 591.90 C 446.14 591.88 452.38 591.86 458.61 591.90 C 460.06 591.93 461.52 591.97 462.98 592.03 C 462.99 601.96 463.04 611.89 462.95 621.83 L 461.64 621.88 C 454.22 621.89 446.81 621.85 439.39 621.87 C 437.59 621.89 435.79 621.95 434.00 621.93 L 433.02 621.67 C 432.98 611.77 433.00 601.87 433.01 591.97 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 432.73 688.61 L 433.46 688.72 C 435.44 688.76 437.43 688.74 439.43 688.74 C 442.92 688.74 446.42 688.78 449.93 688.73 C 447.33 690.86 444.74 693.00 442.32 695.34 C 439.02 693.24 435.90 690.88 432.73 688.61 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 442.44 711.50 C 449.54 706.60 456.42 701.38 463.00 695.80 C 463.03 703.45 462.94 711.11 463.04 718.77 C 462.16 718.77 460.40 718.76 459.53 718.76 C 452.82 718.74 446.11 718.75 439.41 718.74 C 437.33 718.74 435.26 718.78 433.20 718.85 C 432.91 713.66 432.87 708.45 433.23 703.26 C 436.04 706.16 438.47 709.54 441.69 712.00 L 442.44 711.50 Z" }),
            React.createElement("path", { fill: "#343434", opacity: "1.00", d: " M 432.92 774.93 C 433.34 774.86 434.18 774.73 434.60 774.66 C 436.20 774.59 437.81 774.57 439.43 774.60 C 445.39 774.66 451.35 774.62 457.31 774.64 C 459.13 774.63 460.94 774.57 462.77 774.53 C 463.18 784.39 463.04 794.30 462.87 804.16 C 462.63 804.36 462.13 804.74 461.88 804.93 C 454.40 804.55 446.92 804.84 439.44 804.73 C 437.45 804.72 435.47 804.80 433.49 804.92 C 432.30 795.02 433.42 784.91 432.92 774.93 Z" })),
        React.createElement("g", { id: "#cc9c52ff" },
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 332.02 283.95 C 331.72 271.94 341.96 260.86 354.02 260.51 C 373.58 260.51 393.14 260.45 412.70 260.48 C 412.41 281.98 412.73 303.49 412.52 324.99 C 412.41 326.95 413.04 328.81 413.79 330.58 C 412.07 338.44 412.37 346.71 414.79 354.39 C 413.72 356.45 413.35 358.75 413.48 361.05 C 413.71 380.58 413.32 400.12 413.72 419.65 C 408.19 419.76 402.52 419.40 397.20 421.18 C 387.34 424.21 379.25 432.24 376.09 442.05 C 374.09 447.46 374.50 453.31 374.49 458.98 C 374.50 587.32 374.49 715.65 374.50 843.99 C 374.64 850.91 373.75 858.10 376.32 864.71 C 379.73 874.45 388.03 882.34 397.99 885.11 C 402.45 886.47 407.17 886.29 411.78 886.36 C 411.53 906.90 411.55 927.45 411.74 947.99 C 392.82 948.03 373.90 947.96 354.99 948.00 C 345.50 948.09 336.54 941.54 333.42 932.64 C 331.38 927.33 332.15 921.57 332.01 916.03 C 332.02 705.34 332.00 494.64 332.02 283.95 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 835.74 260.52 C 846.15 260.48 856.55 260.45 866.96 260.54 C 878.84 261.15 888.87 272.14 888.49 284.02 C 888.50 495.68 888.49 707.34 888.50 919.01 C 888.55 923.94 888.73 929.10 886.66 933.72 C 883.20 942.25 874.26 948.25 865.03 948.01 C 855.60 947.92 846.17 948.09 836.75 947.94 C 836.35 931.98 836.61 916.01 836.55 900.04 C 836.32 892.47 837.09 884.86 836.07 877.33 C 842.01 871.48 845.87 863.41 845.99 855.02 C 846.03 720.67 845.98 586.32 846.01 451.98 C 846.12 442.77 841.79 433.86 835.03 427.72 C 835.88 423.53 835.52 419.25 835.53 415.00 C 835.59 387.35 835.52 359.69 835.56 332.03 C 835.70 308.19 835.24 284.35 835.74 260.52 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 424.76 494.19 C 430.28 494.34 435.80 493.91 441.32 494.29 C 440.83 494.30 439.86 494.33 439.38 494.35 C 437.79 494.41 436.21 494.51 434.63 494.65 C 433.92 494.72 432.51 494.88 431.80 494.95 C 431.24 500.96 431.65 506.99 431.56 513.01 C 431.71 522.38 431.30 531.76 431.75 541.13 C 429.37 541.13 426.99 541.12 424.62 541.12 C 424.72 525.48 424.44 509.83 424.76 494.19 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 458.08 494.26 C 462.53 494.06 467.04 493.97 471.49 494.50 C 471.23 510.04 471.44 525.58 471.38 541.13 C 469.86 541.12 468.35 541.12 466.84 541.13 C 466.49 525.79 466.85 510.44 466.64 495.10 C 465.21 494.88 463.79 494.66 462.36 494.51 C 460.92 494.43 459.48 494.37 458.05 494.35 L 458.08 494.26 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 497.62 505.54 C 501.45 500.59 507.77 497.82 514.00 498.11 C 524.10 498.29 534.22 497.82 544.31 498.22 C 541.33 498.65 538.36 499.12 535.36 499.43 C 535.27 511.99 535.54 524.56 535.22 537.12 C 527.81 537.14 520.40 537.11 512.99 537.13 C 506.52 537.21 500.14 533.83 496.66 528.37 C 492.01 521.61 492.49 511.91 497.62 505.54 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 776.77 498.18 C 786.85 497.85 796.95 498.16 807.04 498.15 C 815.22 498.24 822.88 504.11 825.11 511.97 C 829.16 523.72 819.36 537.35 806.92 537.12 C 801.00 537.14 795.09 537.13 789.18 537.12 C 789.05 524.48 789.56 511.80 788.89 499.18 C 784.85 498.71 780.80 498.58 776.77 498.18 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 424.61 583.49 C 426.96 583.48 429.32 583.48 431.69 583.48 C 431.50 599.07 431.48 614.67 431.71 630.26 C 429.35 630.25 426.99 630.24 424.63 630.26 C 424.60 614.67 424.65 599.08 424.61 583.49 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 466.83 583.51 C 468.34 583.49 469.86 583.48 471.39 583.48 C 471.36 599.07 471.37 614.66 471.39 630.25 C 469.86 630.24 468.35 630.24 466.83 630.25 C 466.59 614.67 466.62 599.08 466.83 583.51 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 496.70 595.67 C 500.23 590.32 506.55 586.93 512.97 587.01 C 520.37 587.03 527.77 586.94 535.17 587.04 C 535.48 600.01 535.44 612.99 535.20 625.96 C 527.78 626.05 520.37 625.95 512.96 626.00 C 506.29 626.10 499.74 622.44 496.31 616.73 C 492.34 610.43 492.53 601.82 496.70 595.67 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 790.88 587.03 C 797.87 587.30 805.03 586.23 811.90 587.77 C 820.24 590.04 826.36 598.40 825.92 607.05 C 825.92 616.10 818.66 624.38 809.76 625.76 C 803.49 626.25 797.18 625.92 790.90 625.97 C 790.72 612.99 790.73 600.01 790.88 587.03 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 484.33 666.16 C 487.41 664.81 490.40 663.24 493.65 662.32 C 491.26 666.17 488.45 669.73 485.61 673.26 C 485.33 670.91 484.94 668.59 484.37 666.31 L 484.33 666.16 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 415.08 678.85 C 418.33 680.03 421.33 681.80 424.34 683.50 C 424.43 682.72 424.61 681.16 424.69 680.39 C 427.62 680.37 430.55 680.27 433.49 680.34 C 433.43 683.13 433.42 685.92 433.46 688.72 L 432.73 688.61 C 431.53 687.84 430.49 687.96 429.61 688.97 C 428.94 694.00 429.04 699.70 433.23 703.26 C 432.87 708.45 432.91 713.66 433.20 718.85 C 433.41 721.60 433.50 724.36 433.52 727.13 C 430.55 727.13 427.58 727.12 424.62 727.13 C 424.63 716.39 424.61 705.65 424.64 694.92 C 424.92 693.12 423.62 691.75 422.68 690.40 C 419.91 686.71 417.32 682.88 415.08 678.85 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 506.97 685.16 C 510.83 683.80 514.98 684.34 518.99 684.25 C 526.77 684.36 534.55 684.01 542.32 684.32 C 540.29 684.65 538.29 685.11 536.29 685.55 C 536.24 698.12 536.37 710.68 536.17 723.24 C 528.43 723.26 520.68 723.25 512.94 723.24 C 507.16 723.25 501.47 720.57 497.84 716.09 C 493.27 710.59 492.16 702.52 495.03 695.99 C 497.19 690.88 501.65 686.78 506.97 685.16 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 787.85 684.32 C 793.88 684.04 799.93 684.33 805.98 684.24 C 812.90 683.96 819.75 687.78 823.23 693.76 C 826.90 699.86 826.82 707.99 823.03 714.02 C 819.69 719.55 813.42 723.09 806.98 723.22 C 802.24 723.29 797.51 723.24 792.78 723.24 C 792.43 710.71 792.87 698.17 792.58 685.63 C 791.00 685.17 789.42 684.70 787.85 684.32 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 466.53 692.65 C 468.08 691.20 469.65 689.77 471.22 688.35 C 471.58 701.27 471.27 714.21 471.38 727.13 C 469.86 727.12 468.34 727.12 466.83 727.12 C 466.40 715.63 466.97 704.13 466.53 692.65 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 424.49 766.53 C 430.05 765.93 435.68 766.10 441.27 766.29 C 440.79 766.31 439.83 766.34 439.36 766.36 C 437.79 766.41 436.23 766.51 434.68 766.64 C 433.96 766.72 432.52 766.86 431.80 766.94 C 431.33 782.32 431.55 797.74 431.70 813.13 C 429.34 813.12 426.98 813.12 424.62 813.12 C 424.54 797.59 424.80 782.05 424.49 766.53 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 458.30 766.53 C 458.51 766.34 458.95 765.95 459.16 765.75 C 463.15 766.39 467.20 766.14 471.22 766.20 C 471.58 781.83 471.28 797.49 471.37 813.13 C 469.85 813.12 468.33 813.12 466.82 813.13 C 466.51 797.78 466.81 782.42 466.67 767.08 C 465.23 766.87 463.80 766.66 462.37 766.55 C 460.93 766.57 459.50 766.64 458.08 766.75 L 458.30 766.53 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 495.37 781.35 C 498.47 774.72 505.59 770.15 512.95 770.35 C 520.37 770.41 527.79 770.29 535.21 770.40 C 535.46 783.38 535.41 796.38 535.24 809.37 C 527.83 809.39 520.43 809.40 513.03 809.35 C 507.68 809.35 502.38 807.15 498.76 803.21 C 493.24 797.56 491.87 788.41 495.37 781.35 Z" }),
            React.createElement("path", { fill: "#cc9c52", opacity: "1.00", d: " M 789.19 770.37 C 794.78 770.24 800.37 770.43 805.97 770.35 C 811.43 770.14 816.93 772.40 820.63 776.44 C 825.76 781.69 827.33 789.99 824.66 796.81 C 821.99 804.04 814.68 809.23 806.97 809.33 C 801.03 809.43 795.09 809.40 789.16 809.38 C 789.26 796.37 789.22 783.37 789.19 770.37 Z" })),
        React.createElement("g", { id: "#deb964ff" },
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 412.70 260.48 C 423.89 260.59 435.07 260.36 446.26 260.51 C 446.71 267.02 445.58 273.52 446.23 280.03 C 446.46 286.25 446.15 292.49 446.43 298.72 C 430.70 302.10 417.42 314.85 413.79 330.58 C 413.04 328.81 412.41 326.95 412.52 324.99 C 412.73 303.49 412.41 281.98 412.70 260.48 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 783.27 260.49 C 800.76 260.37 818.25 260.60 835.74 260.52 C 835.24 284.35 835.70 308.19 835.56 332.03 C 835.52 359.69 835.59 387.35 835.53 415.00 C 835.52 419.25 835.88 423.53 835.03 427.72 C 829.28 422.63 821.69 419.73 814.02 419.65 C 804.95 419.54 795.88 419.78 786.81 419.62 C 786.73 407.38 786.44 395.12 787.06 382.90 C 786.91 381.32 786.44 379.81 786.06 378.29 C 795.29 372.95 802.62 364.26 805.82 354.04 C 809.68 342.29 808.12 328.90 801.62 318.38 C 797.15 311.02 790.39 305.19 782.61 301.55 C 783.08 298.72 783.45 295.86 783.39 292.99 C 783.24 282.16 783.44 271.32 783.27 260.49 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 413.48 361.05 C 413.35 358.75 413.72 356.45 414.79 354.39 C 418.38 365.53 426.86 374.82 437.40 379.83 C 437.60 393.08 437.66 406.35 437.38 419.60 C 429.49 419.75 421.60 419.52 413.72 419.65 C 413.32 400.12 413.71 380.58 413.48 361.05 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 431.80 494.95 C 432.51 494.88 433.92 494.72 434.63 494.65 C 434.61 497.28 434.63 499.92 434.67 502.57 C 434.28 502.70 433.49 502.95 433.10 503.08 C 432.83 509.70 433.09 516.34 433.00 522.98 C 433.08 526.27 432.64 529.64 433.43 532.88 C 434.48 535.51 434.44 538.34 434.35 541.12 C 433.70 541.12 432.40 541.13 431.75 541.13 C 431.30 531.76 431.71 522.38 431.56 513.01 C 431.65 506.99 431.24 500.96 431.80 494.95 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 462.36 494.51 C 463.79 494.66 465.21 494.88 466.64 495.10 C 466.85 510.44 466.49 525.79 466.84 541.13 C 465.03 541.13 463.22 541.12 461.42 541.12 C 461.34 538.36 461.21 535.57 461.86 532.87 C 462.14 532.71 462.69 532.39 462.96 532.23 C 462.91 522.33 463.25 512.41 462.77 502.52 C 462.50 499.86 462.39 497.18 462.36 494.51 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 544.31 498.22 C 551.68 498.10 559.07 497.83 566.43 498.25 C 564.40 498.64 562.39 499.13 560.38 499.60 C 560.30 512.11 560.51 524.62 560.29 537.12 C 551.93 537.15 543.58 537.11 535.22 537.12 C 535.54 524.56 535.27 511.99 535.36 499.43 C 538.36 499.12 541.33 498.65 544.31 498.22 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 753.70 498.19 C 761.38 497.87 769.08 498.01 776.77 498.18 C 780.80 498.58 784.85 498.71 788.89 499.18 C 789.56 511.80 789.05 524.48 789.18 537.12 C 780.22 537.11 771.26 537.16 762.30 537.13 C 762.54 526.74 762.29 516.36 762.45 505.98 C 762.51 503.70 762.32 501.43 761.94 499.20 C 759.19 498.87 756.45 498.45 753.70 498.19 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 431.69 583.48 C 432.42 583.48 433.90 583.50 434.63 583.50 C 434.59 586.70 433.60 591.56 438.09 591.94 C 436.39 591.95 434.70 591.96 433.01 591.97 C 433.00 601.87 432.98 611.77 433.02 621.67 L 434.00 621.93 C 434.37 624.68 434.39 627.47 434.32 630.25 C 433.67 630.25 432.36 630.26 431.71 630.26 C 431.48 614.67 431.50 599.07 431.69 583.48 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 462.41 583.48 C 463.88 583.48 465.35 583.49 466.83 583.51 C 466.62 599.08 466.59 614.67 466.83 630.25 C 465.02 630.25 463.21 630.25 461.41 630.25 C 461.35 627.45 461.35 624.66 461.64 621.88 L 462.95 621.83 C 463.04 611.89 462.99 601.96 462.98 592.03 C 461.52 591.97 460.06 591.93 458.61 591.90 L 459.21 591.90 C 463.70 591.50 462.37 586.57 462.41 583.48 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 535.17 587.04 C 543.52 587.12 551.87 586.89 560.22 587.03 C 560.55 600.00 560.40 612.99 560.27 625.97 C 551.91 626.10 543.55 625.88 535.20 625.96 C 535.44 612.99 535.48 600.01 535.17 587.04 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 758.38 587.00 C 769.21 586.97 780.05 587.04 790.88 587.03 C 790.73 600.01 790.72 612.99 790.90 625.97 C 780.06 625.96 769.23 626.03 758.40 626.00 C 758.60 613.00 758.66 599.99 758.38 587.00 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 478.30 669.22 C 480.33 668.26 482.34 667.27 484.37 666.31 C 484.94 668.59 485.33 670.91 485.61 673.26 C 483.55 675.57 481.59 677.99 479.40 680.20 C 479.43 676.62 479.41 673.00 478.38 669.54 L 478.30 669.22 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 536.29 685.55 C 538.29 685.11 540.29 684.65 542.32 684.32 C 549.46 684.22 556.61 684.12 563.75 684.24 C 563.59 697.24 563.61 710.25 563.76 723.25 C 554.56 723.31 545.37 723.21 536.17 723.24 C 536.37 710.68 536.24 698.12 536.29 685.55 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 761.35 684.23 C 770.18 684.11 779.01 684.25 787.85 684.32 C 789.42 684.70 791.00 685.17 792.58 685.63 C 792.87 698.17 792.43 710.71 792.78 723.24 C 782.29 723.20 771.81 723.32 761.33 723.26 C 761.53 710.25 761.48 697.23 761.35 684.23 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 463.00 695.80 C 464.20 694.77 465.37 693.71 466.53 692.65 C 466.97 704.13 466.40 715.63 466.83 727.12 C 465.54 727.12 464.26 727.12 462.98 727.13 C 463.12 724.34 463.13 721.55 463.04 718.77 C 462.94 711.11 463.03 703.45 463.00 695.80 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 431.80 766.94 C 432.52 766.86 433.96 766.72 434.68 766.64 C 434.63 769.31 434.60 771.98 434.60 774.66 C 434.18 774.73 433.34 774.86 432.92 774.93 C 433.42 784.91 432.30 795.02 433.49 804.92 C 434.62 807.52 434.40 810.36 434.32 813.12 C 433.67 813.13 432.35 813.13 431.70 813.13 C 431.55 797.74 431.33 782.32 431.80 766.94 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 462.37 766.55 C 463.80 766.66 465.23 766.87 466.67 767.08 C 466.81 782.42 466.51 797.78 466.82 813.13 C 465.01 813.12 463.21 813.12 461.42 813.12 C 461.36 810.38 461.17 807.60 461.88 804.93 C 462.13 804.74 462.63 804.36 462.87 804.16 C 463.04 794.30 463.18 784.39 462.77 774.53 C 462.50 771.87 462.38 769.21 462.37 766.55 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 535.21 770.40 C 543.56 770.50 551.92 770.23 560.27 770.39 C 560.45 783.38 560.47 796.37 560.28 809.37 C 551.93 809.47 543.59 809.30 535.24 809.37 C 535.41 796.38 535.46 783.38 535.21 770.40 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 767.70 770.39 C 774.86 770.23 782.02 770.49 789.19 770.37 C 789.22 783.37 789.26 796.37 789.16 809.38 C 782.00 809.31 774.84 809.46 767.68 809.36 C 767.57 796.37 767.47 783.38 767.70 770.39 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 814.01 886.38 C 822.16 886.33 830.25 883.05 836.07 877.33 C 837.09 884.86 836.32 892.47 836.55 900.04 C 836.61 916.01 836.35 931.98 836.75 947.94 C 818.26 947.91 799.78 948.07 781.29 947.99 C 781.49 927.45 781.49 906.90 781.31 886.36 C 792.21 886.23 803.11 886.41 814.01 886.38 Z" }),
            React.createElement("path", { fill: "#deb964", opacity: "1.00", d: " M 411.78 886.36 C 423.26 886.48 434.73 886.22 446.21 886.38 C 446.37 906.91 446.34 927.44 446.20 947.98 C 434.71 948.06 423.23 947.94 411.74 947.99 C 411.55 927.45 411.53 906.90 411.78 886.36 Z" })),
        React.createElement("g", { id: "#f4de84ff" },
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 446.26 260.51 C 473.42 260.55 500.58 260.42 527.74 260.50 C 527.57 272.91 527.59 285.34 527.74 297.76 C 503.51 297.83 479.28 297.75 455.06 297.72 C 452.15 297.75 449.26 298.09 446.43 298.72 C 446.15 292.49 446.46 286.25 446.23 280.03 C 445.58 273.52 446.71 267.02 446.26 260.51 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 721.25 260.50 C 741.92 260.42 762.60 260.56 783.27 260.49 C 783.44 271.32 783.24 282.16 783.39 292.99 C 783.45 295.86 783.08 298.72 782.61 301.55 C 777.15 298.99 771.11 297.79 765.11 297.75 C 754.52 297.71 743.93 297.85 733.34 297.73 C 729.41 296.76 725.37 296.50 721.34 296.60 C 721.17 284.57 721.49 272.53 721.25 260.50 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 758.98 383.88 C 768.27 384.23 777.95 383.19 786.06 378.29 C 786.44 379.81 786.91 381.32 787.06 382.90 C 786.44 395.12 786.73 407.38 786.81 419.62 C 768.78 419.53 750.74 419.71 732.70 419.61 C 732.36 407.71 732.46 395.78 732.66 383.88 C 741.43 383.86 750.21 383.87 758.98 383.88 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 437.40 379.83 C 443.44 382.80 450.24 383.94 456.94 383.88 C 480.56 383.88 504.18 383.86 527.79 383.87 C 527.48 395.79 527.62 407.71 527.72 419.63 C 497.60 419.72 467.49 419.55 437.38 419.60 C 437.66 406.35 437.60 393.08 437.40 379.83 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 434.63 494.65 C 436.21 494.51 437.79 494.41 439.38 494.35 C 439.48 497.10 439.49 499.85 439.39 502.61 C 437.82 502.59 436.24 502.57 434.67 502.57 C 434.63 499.92 434.61 497.28 434.63 494.65 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 457.26 502.64 C 457.32 499.86 457.33 497.05 458.05 494.35 C 459.48 494.37 460.92 494.43 462.36 494.51 C 462.39 497.18 462.50 499.86 462.77 502.52 C 460.92 502.57 459.09 502.63 457.26 502.64 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 566.43 498.25 C 585.71 498.05 605.00 497.97 624.28 498.20 C 620.58 498.69 616.71 498.13 613.13 499.23 C 612.31 500.65 612.63 502.39 612.51 503.97 C 612.69 515.02 612.39 526.07 612.68 537.13 C 595.22 537.15 577.75 537.12 560.29 537.12 C 560.51 524.62 560.30 512.11 560.38 499.60 C 562.39 499.13 564.40 498.64 566.43 498.25 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 721.70 498.24 C 732.36 497.92 743.04 498.13 753.70 498.19 C 756.45 498.45 759.19 498.87 761.94 499.20 C 762.32 501.43 762.51 503.70 762.45 505.98 C 762.29 516.36 762.54 526.74 762.30 537.13 C 752.09 537.11 741.89 537.15 731.68 537.12 C 731.47 524.57 731.61 512.02 731.62 499.47 C 728.26 499.49 724.96 498.95 721.70 498.24 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 433.43 532.88 C 435.41 532.80 437.40 532.74 439.39 532.74 C 439.49 535.53 439.50 538.32 439.40 541.12 C 437.71 541.12 436.03 541.12 434.35 541.12 C 434.44 538.34 434.48 535.51 433.43 532.88 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 434.63 583.50 C 437.27 583.48 439.92 583.47 442.57 583.48 C 442.52 585.76 442.47 588.06 442.41 590.35 C 441.58 590.87 440.74 591.39 439.91 591.90 C 439.46 591.91 438.55 591.93 438.09 591.94 C 433.60 591.56 434.59 586.70 434.63 583.50 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 457.32 583.50 C 459.02 583.49 460.71 583.48 462.41 583.48 C 462.37 586.57 463.70 591.50 459.21 591.90 C 456.43 589.93 457.53 586.36 457.32 583.50 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 560.22 587.03 C 577.69 587.03 595.18 586.97 612.66 587.00 C 612.55 600.00 612.47 613.00 612.68 626.00 C 595.21 626.03 577.74 625.97 560.27 625.97 C 560.40 612.99 560.55 600.00 560.22 587.03 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 728.18 587.02 C 738.24 586.96 748.31 587.03 758.38 587.00 C 758.66 599.99 758.60 613.00 758.40 626.00 C 748.17 625.97 737.94 626.04 727.72 625.98 C 728.16 619.00 728.58 611.99 728.13 605.00 C 727.48 599.01 728.68 593.02 728.18 587.02 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 434.00 621.93 C 435.79 621.95 437.59 621.89 439.39 621.87 C 439.49 624.66 439.50 627.45 439.43 630.25 C 437.72 630.24 436.02 630.24 434.32 630.25 C 434.39 627.47 434.37 624.68 434.00 621.93 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 472.42 672.84 C 474.34 671.62 476.31 670.48 478.38 669.54 C 479.41 673.00 479.43 676.62 479.40 680.20 C 477.21 682.40 475.16 684.73 472.78 686.73 C 472.36 682.11 472.41 677.47 472.42 672.84 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 433.49 680.34 C 435.47 680.38 437.46 680.37 439.45 680.39 C 439.51 683.17 439.50 685.95 439.43 688.74 C 437.43 688.74 435.44 688.76 433.46 688.72 C 433.42 685.92 433.43 683.13 433.49 680.34 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 563.75 684.24 C 577.58 684.33 591.42 684.13 605.25 684.25 C 605.34 697.25 605.35 710.25 605.26 723.25 C 591.43 723.29 577.59 723.22 563.76 723.25 C 563.61 710.25 563.59 697.24 563.75 684.24 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 731.67 684.26 C 741.56 684.14 751.46 684.35 761.35 684.23 C 761.48 697.23 761.53 710.25 761.33 723.26 C 751.45 723.22 741.57 723.29 731.69 723.24 C 731.47 710.25 731.53 697.25 731.67 684.26 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 429.61 688.97 C 430.49 687.96 431.53 687.84 432.73 688.61 C 435.90 690.88 439.02 693.24 442.32 695.34 C 442.28 700.72 442.19 706.11 442.44 711.50 L 441.69 712.00 C 438.47 709.54 436.04 706.16 433.23 703.26 C 429.04 699.70 428.94 694.00 429.61 688.97 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 433.20 718.85 C 435.26 718.78 437.33 718.74 439.41 718.74 C 439.51 721.53 439.52 724.32 439.45 727.12 C 437.47 727.12 435.49 727.12 433.52 727.13 C 433.50 724.36 433.41 721.60 433.20 718.85 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 459.53 718.76 C 460.40 718.76 462.16 718.77 463.04 718.77 C 463.13 721.55 463.12 724.34 462.98 727.13 C 462.11 727.12 460.36 727.12 459.49 727.12 C 459.41 724.33 459.42 721.54 459.53 718.76 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 434.68 766.64 C 436.23 766.51 437.79 766.41 439.36 766.36 C 439.47 769.10 439.49 771.85 439.43 774.60 C 437.81 774.57 436.20 774.59 434.60 774.66 C 434.60 771.98 434.63 769.31 434.68 766.64 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 457.04 767.13 C 457.30 767.03 457.82 766.84 458.08 766.75 C 459.50 766.64 460.93 766.57 462.37 766.55 C 462.38 769.21 462.50 771.87 462.77 774.53 C 460.94 774.57 459.13 774.63 457.31 774.64 C 457.40 772.12 457.38 769.61 457.04 767.13 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 560.27 770.39 C 575.26 770.44 590.26 770.27 605.25 770.38 C 605.34 783.37 605.38 796.37 605.24 809.37 C 590.25 809.44 575.26 809.34 560.28 809.37 C 560.47 796.37 560.45 783.38 560.27 770.39 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 731.68 770.39 C 743.68 770.28 755.69 770.46 767.70 770.39 C 767.47 783.38 767.57 796.37 767.68 809.36 C 755.68 809.32 743.69 809.43 731.70 809.37 C 731.52 796.37 731.49 783.38 731.68 770.39 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 433.49 804.92 C 435.47 804.80 437.45 804.72 439.44 804.73 C 439.51 807.52 439.50 810.32 439.42 813.12 C 437.71 813.11 436.02 813.12 434.32 813.12 C 434.40 810.36 434.62 807.52 433.49 804.92 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 446.21 886.38 C 470.54 886.45 494.88 886.28 519.22 886.38 C 519.38 906.91 519.37 927.45 519.22 947.99 C 494.88 948.05 470.54 947.95 446.20 947.98 C 446.34 927.44 446.37 906.91 446.21 886.38 Z" }),
            React.createElement("path", { fill: "#f4de84", opacity: "1.00", d: " M 730.67 886.39 C 747.55 886.28 764.43 886.47 781.31 886.36 C 781.49 906.90 781.49 927.45 781.29 947.99 C 764.42 947.93 747.54 948.07 730.67 947.97 C 730.48 927.45 730.48 906.91 730.67 886.39 Z" })),
        React.createElement("g", { id: "#f6eeb7ff" },
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 527.74 260.50 C 592.24 260.48 656.74 260.49 721.25 260.50 C 721.49 272.53 721.17 284.57 721.34 296.60 C 725.37 296.50 729.41 296.76 733.34 297.73 C 664.81 297.76 596.27 297.77 527.74 297.76 C 527.59 285.34 527.57 272.91 527.74 260.50 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 527.79 383.87 C 596.08 383.87 664.37 383.87 732.66 383.88 C 732.46 395.78 732.36 407.71 732.70 419.61 C 664.37 419.63 596.04 419.65 527.72 419.63 C 527.62 407.71 527.48 395.79 527.79 383.87 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 441.32 494.29 C 446.90 494.16 452.49 494.27 458.08 494.26 L 458.05 494.35 C 457.33 497.05 457.32 499.86 457.26 502.64 C 451.30 502.62 445.35 502.65 439.39 502.61 C 439.49 499.85 439.48 497.10 439.38 494.35 C 439.86 494.33 440.83 494.30 441.32 494.29 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 624.28 498.20 C 656.75 498.03 689.23 498.04 721.70 498.24 C 724.96 498.95 728.26 499.49 731.62 499.47 C 731.61 512.02 731.47 524.57 731.68 537.12 C 692.01 537.13 652.35 537.13 612.68 537.13 C 612.39 526.07 612.69 515.02 612.51 503.97 C 612.63 502.39 612.31 500.65 613.13 499.23 C 616.71 498.13 620.58 498.69 624.28 498.20 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 439.39 532.74 C 446.88 532.79 454.37 532.63 461.86 532.87 C 461.21 535.57 461.34 538.36 461.42 541.12 C 454.08 541.12 446.74 541.14 439.40 541.12 C 439.50 538.32 439.49 535.53 439.39 532.74 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 442.57 583.48 C 447.49 583.48 452.40 583.49 457.32 583.50 C 457.53 586.36 456.43 589.93 459.21 591.90 L 458.61 591.90 C 452.38 591.86 446.14 591.88 439.91 591.90 C 440.74 591.39 441.58 590.87 442.41 590.35 C 442.47 588.06 442.52 585.76 442.57 583.48 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 612.66 587.00 C 651.16 587.00 689.67 587.00 728.18 587.02 C 728.68 593.02 727.48 599.01 728.13 605.00 C 728.58 611.99 728.16 619.00 727.72 625.98 C 689.37 626.01 651.03 626.00 612.68 626.00 C 612.47 613.00 612.55 600.00 612.66 587.00 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 439.39 621.87 C 446.81 621.85 454.22 621.89 461.64 621.88 C 461.35 624.66 461.35 627.45 461.41 630.25 C 454.08 630.23 446.76 630.28 439.43 630.25 C 439.50 627.45 439.49 624.66 439.39 621.87 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 461.78 679.82 C 465.29 677.43 468.82 675.08 472.42 672.84 C 472.41 677.47 472.36 682.11 472.78 686.73 L 472.79 686.87 C 472.27 687.36 471.74 687.85 471.22 688.35 C 469.65 689.77 468.08 691.20 466.53 692.65 C 465.37 693.71 464.20 694.77 463.00 695.80 C 456.42 701.38 449.54 706.60 442.44 711.50 C 442.19 706.11 442.28 700.72 442.32 695.34 C 444.74 693.00 447.33 690.86 449.93 688.73 C 446.42 688.78 442.92 688.74 439.43 688.74 C 439.50 685.95 439.51 683.17 439.45 680.39 C 445.64 680.37 451.83 680.30 458.02 680.43 C 459.27 680.36 460.71 680.68 461.78 679.82 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 605.25 684.25 C 647.39 684.22 689.53 684.24 731.67 684.26 C 731.53 697.25 731.47 710.25 731.69 723.24 C 689.55 723.26 647.41 723.26 605.26 723.25 C 605.35 710.25 605.34 697.25 605.25 684.25 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 439.41 718.74 C 446.11 718.75 452.82 718.74 459.53 718.76 C 459.42 721.54 459.41 724.33 459.49 727.12 C 452.81 727.13 446.13 727.13 439.45 727.12 C 439.52 724.32 439.51 721.53 439.41 718.74 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 441.27 766.29 C 446.71 766.14 452.15 766.31 457.59 766.20 L 458.30 766.53 L 458.08 766.75 C 457.82 766.84 457.30 767.03 457.04 767.13 C 457.38 769.61 457.40 772.12 457.31 774.64 C 451.35 774.62 445.39 774.66 439.43 774.60 C 439.49 771.85 439.47 769.10 439.36 766.36 C 439.83 766.34 440.79 766.31 441.27 766.29 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 605.25 770.38 C 647.39 770.35 689.54 770.37 731.68 770.39 C 731.49 783.38 731.52 796.37 731.70 809.37 C 689.54 809.38 647.39 809.39 605.24 809.37 C 605.38 796.37 605.34 783.37 605.25 770.38 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 439.44 804.73 C 446.92 804.84 454.40 804.55 461.88 804.93 C 461.17 807.60 461.36 810.38 461.42 813.12 C 454.08 813.12 446.75 813.14 439.42 813.12 C 439.50 810.32 439.51 807.52 439.44 804.73 Z" }),
            React.createElement("path", { fill: "#f6eeb7", opacity: "1.00", d: " M 519.22 886.38 C 589.70 886.35 660.19 886.37 730.67 886.39 C 730.48 906.91 730.48 927.45 730.67 947.97 C 660.18 948.01 589.70 948.00 519.22 947.99 C 519.37 927.45 519.38 906.91 519.22 886.38 Z" }))));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React.createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 506.161 506.161" }, props),
        React.createElement("path", { d: "m165.858 329.247c6.161-5.421 6.766-14.807 1.352-20.974l-.818-.939c-2.599-2.953-6.269-4.745-10.195-4.98-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-19.921 17.488-18.142 15.923c-6.143 5.428-6.744 14.799-1.345 20.967l.832.953c5.425 6.158 14.811 6.763 20.981 1.352l13.945-12.237z" }),
        React.createElement("path", { d: "m118.026 369.9c-.413 0-.818 0-1.231-.036-4.876-.301-9.428-2.541-12.643-6.218l-.84-.96c-6.678-7.643-5.931-19.245 1.672-25.969l38.078-33.439c3.675-3.216 8.473-4.847 13.347-4.539 4.876.301 9.428 2.54 12.643 6.218l1.167 1.359c6.366 7.663 5.477 19.001-2.006 25.577l-38.064 33.439c-3.346 2.955-7.659 4.58-12.123 4.568zm37.167-64.032c-2.744.014-5.389 1.026-7.442 2.846l-38.064 33.439c-4.669 4.132-5.123 11.259-1.017 15.951l.84.96c4.128 4.676 11.262 5.131 15.951 1.017l38.057-33.439c4.682-4.122 5.14-11.257 1.025-15.944l-.832-.96c-1.97-2.253-4.76-3.624-7.748-3.806z" }),
        React.createElement("path", { d: "m219.282 366.414c-3.605-.005-7.089 1.305-9.797 3.685l-19.644 17.246c-6.173 5.417-6.786 14.812-1.37 20.985 5.417 6.173 14.812 6.786 20.985 1.37l19.644-17.246c6.173-5.41 6.791-14.8 1.381-20.973-2.827-3.226-6.91-5.073-11.199-5.067z" }),
        React.createElement("path", { d: "m199.667 416.942c-10.173.018-18.434-8.215-18.452-18.388-.009-5.317 2.28-10.38 6.279-13.884l19.651-17.246c7.748-6.414 19.154-5.672 26.004 1.693 6.714 7.651 5.956 19.295-1.693 26.011l-19.644 17.246c-3.357 2.953-7.676 4.577-12.145 4.568zm19.622-46.956c-2.746-.021-5.405.96-7.478 2.76l-19.651 17.246c-4.698 4.126-5.161 11.279-1.035 15.976 4.126 4.698 11.279 5.161 15.976 1.035l19.651-17.225c4.696-4.115 5.166-11.258 1.051-15.953-2.151-2.454-5.258-3.859-8.521-3.854z" }),
        React.createElement("path", { d: "m44.004 93.793-39.942 174.253 31.931 17.943 82.63-134.41z" }),
        React.createElement("path", { d: "m37.231 290.763-37.231-20.917 41.77-182.278 81.549 63.143zm-29.106-24.517 26.63 14.941 79.172-128.776-67.703-52.393z" }),
        React.createElement("path", { d: "m119.648 309.013c6.171-5.42 6.782-14.815 1.366-20.988l-.256-.292c-2.593-2.97-6.267-4.779-10.202-5.023-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-23.856 20.889c-6.171 5.42-6.782 14.815-1.366 20.988 5.309 6.317 14.734 7.133 21.051 1.823.065-.055.13-.11.194-.166l1.807-1.587 18.157-15.937z" }),
        React.createElement("path", { d: "m86.152 337.172c-.455 0-.918 0-1.387-.05-4.97-.383-9.588-2.712-12.849-6.481-6.715-7.647-5.96-19.289 1.686-26.004l23.827-20.91c7.647-6.706 19.28-5.951 25.997 1.686 3.382 3.714 5.112 8.64 4.795 13.653-.301 4.879-2.543 9.435-6.225 12.65l-23.82 20.91c-3.317 2.935-7.595 4.553-12.024 4.546zm23.414-50.912c-2.744.011-5.391 1.023-7.442 2.846l-23.827 20.91c-4.696 4.121-5.161 11.269-1.04 15.964 0 0 .001.001.001.001 2.032 2.366 4.916 3.834 8.025 4.084 2.989.234 5.945-.758 8.189-2.746l23.82-20.91c4.692-4.124 5.157-11.269 1.039-15.965-1.998-2.411-4.895-3.899-8.018-4.119z" }),
        React.createElement("path", { d: "m202.755 350.641c.269-3.938-1.051-7.82-3.664-10.779l-.213-.242c-2.595-2.95-6.26-4.742-10.181-4.98-.327 0-.662 0-.989 0-3.605-.006-7.087 1.307-9.79 3.693l-2.334 2.049-24.105 21.159-6.403 5.592c-6.183 5.595-6.659 15.142-1.065 21.324 2.61 2.885 6.234 4.651 10.115 4.929 3.939.274 7.823-1.046 10.779-3.664l32.82-28.807c2.988-2.611 4.801-6.313 5.03-10.274z" }),
        React.createElement("path", { d: "m155.115 396.936c-.406 0-.804 0-1.209-.036-10.248-.634-18.041-9.456-17.406-19.704.304-4.916 2.547-9.511 6.236-12.775l32.792-28.843c3.681-3.207 8.475-4.837 13.347-4.539 4.869.298 9.417 2.532 12.629 6.204 3.375 3.708 5.101 8.628 4.781 13.632-.308 4.866-2.544 9.408-6.211 12.621l-32.82 28.807c-3.345 2.978-7.663 4.626-12.139 4.633zm22.767-53.937-30.458 26.737c-4.698 4.12-5.175 11.264-1.067 15.972 1.999 2.378 4.877 3.844 7.976 4.063 3.006.213 5.971-.795 8.225-2.796l32.82-28.807c4.695-4.116 5.165-11.258 1.049-15.954-.003-.004-.007-.008-.01-.012-1.993-2.391-4.877-3.861-7.983-4.07h-.754c-2.747 0-5.397 1.013-7.442 2.846z" }),
        React.createElement("path", { d: "m399.398 303.122-115.785-94.348c-44.339 23.543-75.736 11.426-90.748 1.843-7.825-5.106-10.029-15.59-4.923-23.415 1.586-2.431 3.772-4.413 6.346-5.755l38.59-20.497c-.996-.149-1.971-.277-2.846-.363-34.825 5.502-69.995 8.531-105.248 9.064l-67.461 109.722 15.04 11.462 17.68-15.524c12.275-10.776 30.962-9.561 41.738 2.714.001.001.002.003.004.004l.256.292c3.538 4.057 5.891 9.009 6.802 14.315 5.361-3.658 11.795-5.411 18.271-4.98 7.833.488 15.145 4.09 20.305 10.003l.832.953c5.187 5.881 7.808 13.591 7.278 21.415v.043c1.354-.138 2.716-.183 4.077-.135 7.833.489 15.144 4.091 20.305 10.003l-5.315 5.094 5.528-4.852c5.195 5.883 7.821 13.599 7.293 21.429 0 .1-.043.192-.05.292 16.199-1.153 30.265 11.045 31.418 27.244.096 1.352.099 2.709.008 4.061-.365 5.088-2.052 9.993-4.895 14.229l31.724 18.306c6.955 3.944 15.787 1.604 19.878-5.265 3.88-6.556 1.988-15-4.319-19.274l-50.514-35.004c-.043 0-.064-.078-.1-.107l-3.401-2.355c-3.3-2.371-4.053-6.967-1.682-10.267 2.312-3.219 6.759-4.027 10.056-1.828l71.247 49.355c6.572 4.555 15.592 2.92 20.147-3.652.003-.004.006-.008.009-.012 4.471-6.535 2.889-15.445-3.557-20.042l-70.898-50.287c-.043 0-.057-.078-.1-.107-3.312-2.358-4.086-6.954-1.729-10.267s6.954-4.086 10.267-1.729l79.485 56.391c6.952 4.909 16.568 3.253 21.477-3.7 4.752-6.729 3.37-16.006-3.136-21.059l-85.526-61.627c-3.38-2.255-4.292-6.822-2.037-10.202s6.822-4.292 10.202-2.037c.127.085.251.173.373.266l5.848 4.169h.078l79.265 57.11c.149.107.256.242.398.349l1.309.939c.249.172.487.359.711.562l1.423.975c6.625 4.747 15.807 3.478 20.896-2.889 3.043-3.845 4.028-8.929 2.64-13.632-.844-2.914-2.568-5.495-4.934-7.393z" }),
        React.createElement("path", { d: "m282.83 421.24c-3.145.001-6.234-.826-8.957-2.398l-35.026-20.199 2.134-3.13c7.907-11.928 4.646-28.007-7.282-35.914-3.783-2.508-8.159-3.978-12.689-4.263-.883-.043-1.768-.019-2.647.071l-4.774.299.277-4.048c.448-5.749-1.029-11.483-4.198-16.3l-2.668 2.348-4.81-5.236 2.704-2.59c-4.302-3.792-9.744-6.045-15.467-6.403-1.037-.034-2.076-.001-3.109.1l-3.821.285-.477-4.212v-.15c.373-6.782-1.926-13.44-6.403-18.548l-.84-.96c-8.565-9.832-23.125-11.713-33.909-4.383l-4.532 3.045-.953-5.379c-2.417-14.221-15.905-23.789-30.126-21.371-4.756.809-9.196 2.919-12.826 6.096l-19.871 17.445-19.957-15.19 70.158-114.12 1.914-.057c35.061-.535 70.041-3.543 104.679-9l.498-.1.505.043c.939.085 1.978.228 3.052.384l10.672 1.601-48.124 25.556c-6.556 3.387-9.124 11.448-5.737 18.004 1.062 2.055 2.639 3.799 4.577 5.062 14.123 9.014 44.261 20.761 87.148-1.999l2.085-1.11 117.606 95.828c2.92 2.371 5.038 5.582 6.069 9.199 1.718 5.8.508 12.074-3.244 16.819-6.284 7.853-17.615 9.416-25.791 3.557l-3.991-2.981-84.978-61.186c-1.698-1.219-4.063-.831-5.282.867-.004.005-.007.01-.011.016-1.221 1.702-.831 4.071.87 5.292.004.003.008.006.012.009l85.54 61.677c8.293 6.401 9.827 18.312 3.426 26.605-6.195 8.027-17.608 9.761-25.908 3.939l-79.507-56.363c-.825-.585-1.849-.818-2.846-.647-2.069.35-3.462 2.311-3.112 4.38.168.994.725 1.881 1.547 2.465l71.019 50.408c8.024 5.733 9.982 16.833 4.404 24.965-5.664 8.194-16.898 10.245-25.092 4.581-.003-.002-.006-.004-.009-.006l-71.232-49.362c-1.685-1.251-4.064-.899-5.315.786s-.899 4.064.786 5.315c.069.051.139.099.211.146l54.029 37.466c8.216 5.625 10.316 16.845 4.691 25.061-2.423 3.539-6.029 6.098-10.169 7.218-1.603.441-3.259.666-4.923.667zm-34.022-25.08 28.622 16.52c5.336 2.887 12.002.903 14.889-4.433 2.606-4.815 1.268-10.813-3.136-14.065l-40.376-28.018c2.734 5.325 3.964 11.295 3.557 17.267-.288 4.445-1.5 8.78-3.556 12.729zm-7.413-59.357c2.212-.004 4.372.669 6.19 1.928l71.232 49.355c4.961 3.429 11.763 2.19 15.197-2.768 3.375-4.927 2.185-11.649-2.675-15.119l-71.404-50.699c-4.725-3.742-5.522-10.607-1.78-15.332 3.585-4.526 10.074-5.477 14.807-2.17l79.507 56.391c5.368 3.747 12.757 2.432 16.504-2.936 3.597-5.154 2.546-12.219-2.395-16.103l-85.433-61.563c-4.902-3.505-6.034-10.32-2.529-15.222s10.32-6.034 15.222-2.529l5.934 4.205 80.965 58.405c.364.262.711.547 1.039.854l1.003.655c5.068 3.672 12.125 2.734 16.058-2.134 2.336-2.943 3.095-6.839 2.035-10.444-.619-2.234-1.913-4.222-3.707-5.692l-113.985-92.875c-44.958 22.98-77.009 10.331-92.228.605-9.487-6.155-12.188-18.835-6.033-28.322 1.927-2.971 4.592-5.391 7.734-7.024l21.814-11.583c-22.184 3.01-52.471 5.251-87.639 6.403l-64.745 105.366 10.181 7.748 15.503-13.603c13.747-12.071 34.678-10.712 46.749 3.035.003.003.006.007.009.01 2.974 3.364 5.244 7.29 6.674 11.547 5.037-2.448 10.627-3.535 16.214-3.152 8.783.545 16.982 4.583 22.767 11.213l.84.96c4.92 5.576 7.802 12.657 8.175 20.085h.711c7.662.501 14.908 3.664 20.483 8.943l.114-.1 1.928 2.206.206.228 2.241 2.554-.1.1c3.818 5.238 5.999 11.489 6.268 17.965h.434c3.16.206 6.275.863 9.249 1.949-1.368-5.858 2.273-11.716 8.131-13.084.833-.194 1.686-.29 2.541-.285z" }),
        React.createElement("path", { d: "m462.149 91.146-74.605 57.786 69.013 112.249c.454.235.881.519 1.274.847 1.183 1.219 1.898 2.816 2.021 4.511l10.338 16.812 31.902-17.95z" }),
        React.createElement("path", { d: "m468.922 288.124-12.557-20.433-.078-.825c-.046-.871-.399-1.698-.996-2.334l-1.366-.811-.42-.711-70.685-114.939 81.563-63.15 41.777 182.278zm-5.691-22.81 8.153 13.255 26.63-14.941-38.085-166.263-67.696 52.421 66.878 108.777c.441.264.849.579 1.217.939 1.56 1.583 2.583 3.616 2.924 5.813z" }),
        React.createElement("path", { d: "m368.385 168.86c-14.472 5.958-30.597 6.544-45.463 1.651l-39.166-12.714c-5.413-1.716-11.287-1.204-16.321 1.423l-13.276 7.051c-.142.071-.263.157-.413.221l-52.606 27.947c-.749.359-1.237 1.105-1.266 1.935-.058.751.307 1.473.946 1.871 15.474 9.875 41.977 17.075 79.919-4.696 2.644-1.513 5.946-1.245 8.31.676l119.584 97.471c1.665 1.369 3.169 2.923 4.482 4.632l29.569-29.59-63.015-102.494z" }),
        React.createElement("path", { d: "m412.809 301.649-2.476-3.138c-1.144-1.498-2.457-2.859-3.913-4.055l-119.612-97.443c-1.219-.974-2.908-1.112-4.269-.349-39.494 22.682-67.262 15.026-83.605 4.61-1.72-1.084-2.711-3.022-2.583-5.051.086-2.09 1.298-3.969 3.166-4.909l66.273-35.196c5.882-3.082 12.752-3.686 19.082-1.679l39.152 12.693c14.062 4.633 29.317 4.083 43.008-1.551l14.108-5.777 66.067 107.432zm-128.428-112.612c2.514-.005 4.953.854 6.908 2.433l119.591 97.471c.842.679 1.643 1.409 2.398 2.184l24.901-24.901-59.956-97.55-8.481 3.472c-15.258 6.281-32.259 6.896-47.932 1.736l-39.131-12.707c-4.506-1.415-9.39-.98-13.575 1.21l-64.267 34.151c14.891 8.651 39.387 13.923 74.156-6.047 1.641-.944 3.498-1.444 5.388-1.452z" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React.createElement("path", { d: "m629.609375 303.507812-81.988281-40.820312-180.261719 89.753906c-14.582031 7.261719-30.957031 11.101563-47.359375 11.101563s-32.777344-3.839844-47.359375-11.101563l-180.261719-89.753906-81.988281 40.820312c-6.367187 3.171876-10.390625 9.671876-10.390625 16.785157 0 7.117187 4.023438 13.613281 10.390625 16.785156l278.964844 138.898437c9.59375 4.78125 20.117187 7.167969 30.644531 7.167969 10.523438 0 21.050781-2.386719 30.644531-7.160156l278.964844-138.90625c6.367187-3.171875 10.390625-9.667969 10.390625-16.785156 0-7.113281-4.023438-13.613281-10.390625-16.785157zm0 0" }),
        React.createElement("path", { d: "m629.609375 460.65625-81.988281-40.824219-180.261719 89.757813c-14.582031 7.261718-30.957031 11.09375-47.359375 11.09375s-32.777344-3.832032-47.359375-11.09375l-180.261719-89.757813-81.988281 40.824219c-6.367187 3.167969-10.390625 9.671875-10.390625 16.78125 0 7.113281 4.023438 13.613281 10.390625 16.789062l278.964844 138.898438c9.59375 4.777344 20.117187 7.167969 30.644531 7.167969 10.523438-.003907 21.050781-2.390625 30.644531-7.167969l278.964844-138.898438c6.367187-3.175781 10.390625-9.675781 10.390625-16.789062s-4.023438-13.613281-10.390625-16.78125zm0 0" }),
        React.createElement("path", { d: "m10.390625 179.972656 278.964844 138.902344c9.59375 4.773438 20.117187 7.167969 30.644531 7.167969s21.050781-2.394531 30.644531-7.167969l278.964844-138.902344c6.367187-3.167968 10.390625-9.671875 10.390625-16.78125 0-7.117187-4.023438-13.621094-10.390625-16.789062l-278.964844-138.90625c-19.191406-9.550782-42.097656-9.550782-61.289062 0l-278.964844 138.90625c-6.367187 3.167968-10.390625 9.671875-10.390625 16.789062 0 7.109375 4.023438 13.613282 10.390625 16.78125zm0 0" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React.createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React.createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React.createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React.createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$I,
    GroupsIcon: Icon$J,
    HamburgerIcon: Icon$K,
    HamburgerCloseIcon: Icon$L,
    HomeIcon: Icon$M,
    IfoIcon: Icon$N,
    InfoIcon: Icon$O,
    LanguageIcon: Icon$P,
    LogoIcon: Logo,
    MoonIcon: Icon$Q,
    MoreIcon: Icon$R,
    NftIcon: Icon$S,
    PoolIcon: Icon$T,
    SunIcon: Icon$U,
    TelegramIcon: Icon$V,
    TicketIcon: Icon$W,
    TradeIcon: Icon$X,
    TwitterIcon: Icon$Y,
    RedditIcon: Icon$Z,
    AuditIcon: Icon$_,
    GooseIcon: Icon$$,
    HandshakeIcon: Icon$10,
    LayerIcon: Icon$11,
    RoadmapIcon: Icon$12
});

var MenuButton = styled(Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled(Link$1)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 42px !important;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 42px !important;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$q, { className: "mobile-icon" }),
        React.createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$L, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$K, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: "Github",
                href: "https://github.com/goosedefi/",
            },
            {
                label: "Docs",
                href: "https://goosedefi.gitbook.io/goose-finance/",
            },
            {
                label: "Blog",
                href: "https://goosefinance.medium.com/",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "Group",
                href: "https://t.me/official_24kswap",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/24Kswap",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, priceLink = _a.priceLink;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$l, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            cakePriceUsd ? (React.createElement(PriceLink, { href: priceLink, target: "_blank" },
                React.createElement(Icon$v, { width: "24px", mr: "8px" }),
                React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
            React.createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "8px" : 0;
                if (social.items) {
                    return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            }))),
        React.createElement(SettingsEntry, null,
            React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React.createElement(Flex, { alignItems: "center" },
                    React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$13,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$16,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$14,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$15,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$17,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$18,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React.createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$E;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$19 = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$19, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#f6c90e",
    primaryBright: "#f6c90e",
    primaryDark: "#0098A1",
    secondary: "#f6c90e",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#242012", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "#615521", textDisabled: "#BDC2C4", textSubtle: "#8f80ba", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#f6c90e", background: "#303841", backgroundDisabled: "#434138", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#514c35", primaryDark: "#0098A1", tertiary: "#55513f", text: "#fcf7e3", textDisabled: "#767366", textSubtle: "#d5c78c", borderColor: "#524B63", card: "#3a4750", gradients: {
        bubblegum: "linear-gradient(139.73deg, #4b4428 0%, #4b4426 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Breadcrumbs, Icon$c as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$e as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, Icon$n as CopyIcon, CopyToClipboard, Dropdown, Icon$1 as ErrorIcon, Flex, Icon$w as GooseRoundIcon, Heading, Icon$o as HelpIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Menu, Icon$s as MinusIcon, Modal, ModalProvider, Icon$t as OpenNewIcon, Icon$v as PancakeRoundIcon, Icon$u as PancakesIcon, Icon$x as PrizeIcon, Progress, Icon$A as ProgressBunny, Radio, Icon$y as RemoveIcon, ResetCSS, Icon$E as SearchIcon, Skeleton, Spinner, Svg, Icon$F as SwapVertIcon, Icon$G as SyncAltIcon, Tag, Text, Icon$C as Ticket, Icon$D as TicketRound, ToastContainer, Toggle, Icon$z as VerifiedIcon, Icon$H as WarningIcon, Icon$B as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
