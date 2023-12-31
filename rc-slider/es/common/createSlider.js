import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import React from 'react';
import addEventListener from "rc-util/es/Dom/addEventListener";
import classNames from 'classnames';
import warning from "rc-util/es/warning";
import Steps from './Steps';
import Marks from './Marks';
import Handle from '../Handle';
import * as utils from '../utils';
/* eslint-disable @typescript-eslint/no-explicit-any */

function noop() {}

export default function createSlider(Component) {
    var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


    return _a = /*#__PURE__*/ function(_Component) {
        _inherits(ComponentEnhancer, _Component);

        var _super = _createSuper(ComponentEnhancer);

        function ComponentEnhancer(props) {
            var _this;

            _classCallCheck(this, ComponentEnhancer);

            _this = _super.call(this, props);

            _this.onDown = function(e, position) {
                var p = position;
                var _this$props = _this.props,
                    draggableTrack = _this$props.draggableTrack,
                    isVertical = _this$props.vertical;
                var bounds = _this.state.bounds;
                var value = draggableTrack && _this.positionGetValue ? _this.positionGetValue(p) || [] : [];
                var inPoint = utils.isEventFromHandle(e, _this.handlesRefs);
                _this.dragTrack = draggableTrack && bounds.length >= 2 && !inPoint && !value.map(function(n, i) {
                    var v = !i ? n >= bounds[i] : true;
                    return i === value.length - 1 ? n <= bounds[i] : v;
                }).some(function(c) {
                    return !c;
                });

                if (_this.dragTrack) {
                    _this.dragOffset = p;
                    _this.startBounds = _toConsumableArray(bounds);
                } else {
                    if (!inPoint) {
                        _this.dragOffset = 0;
                    } else {
                        var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
                        _this.dragOffset = p - handlePosition;
                        p = handlePosition;
                    }

                    _this.onStart(p);
                }
            };

            _this.onMouseDown = function(e) {
                if (e.button !== 0) {
                    return;
                }

                _this.removeDocumentEvents();

                var isVertical = _this.props.vertical;
                var position = utils.getMousePosition(isVertical, e);

                _this.onDown(e, position);

                _this.addDocumentMouseEvents();
            };

            _this.onTouchStart = function(e) {
                if (utils.isNotTouchEvent(e)) return;
                var isVertical = _this.props.vertical;
                var position = utils.getTouchPosition(isVertical, e);

                _this.onDown(e, position);

                _this.addDocumentTouchEvents();

                utils.pauseEvent(e);
            };

            _this.onFocus = function(e) {
                var _this$props2 = _this.props,
                    onFocus = _this$props2.onFocus,
                    vertical = _this$props2.vertical;

                if (utils.isEventFromHandle(e, _this.handlesRefs) && !_this.dragTrack) {
                    var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
                    _this.dragOffset = 0;

                    _this.onStart(handlePosition);

                    utils.pauseEvent(e);

                    if (onFocus) {
                        onFocus(e);
                    }
                }
            };

            _this.onBlur = function(e) {
                var onBlur = _this.props.onBlur;

                if (!_this.dragTrack) {
                    _this.onEnd();
                }

                if (onBlur) {
                    onBlur(e);
                }
            };

            _this.onMouseUp = function() {
                if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
                    _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
                }
            };

            _this.onMouseMove = function(e) {
                if (!_this.sliderRef) {
                    _this.onEnd();

                    return;
                }

                var position = utils.getMousePosition(_this.props.vertical, e);

                _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
            };

            _this.onTouchMove = function(e) {
                if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
                    _this.onEnd();

                    return;
                }

                var position = utils.getTouchPosition(_this.props.vertical, e);

                _this.onMove(e, position - _this.dragOffset, _this.dragTrack, _this.startBounds);
            };

            _this.onKeyDown = function(e) {
                if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
                    _this.onKeyboard(e);
                }
            };

            _this.onClickMarkLabel = function(e, value) {
                e.stopPropagation();

                _this.onChange({
                    value: value
                }); // eslint-disable-next-line react/no-unused-state


                _this.setState({
                    value: value
                }, function() {
                    return _this.onEnd(true);
                });
            };

            _this.saveSlider = function(slider) {
                _this.sliderRef = slider;
            };

            var step = props.step,
                max = props.max,
                min = props.min;
            var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line

            warning(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
            _this.handlesRefs = {};
            return _this;
        }

        _createClass(ComponentEnhancer, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                // Snapshot testing cannot handle refs, so be sure to null-check this.
                this.document = this.sliderRef && this.sliderRef.ownerDocument;
                var _this$props3 = this.props,
                    autoFocus = _this$props3.autoFocus,
                    disabled = _this$props3.disabled;

                if (autoFocus && !disabled) {
                    this.focus();
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (_get(_getPrototypeOf(ComponentEnhancer.prototype), "componentWillUnmount", this)) _get(_getPrototypeOf(ComponentEnhancer.prototype), "componentWillUnmount", this).call(this);
                this.removeDocumentEvents();
            }
        }, {
            key: "getSliderStart",
            value: function getSliderStart() {
                var slider = this.sliderRef;
                var _this$props4 = this.props,
                    vertical = _this$props4.vertical,
                    reverse = _this$props4.reverse;
                var rect = slider.getBoundingClientRect();

                if (vertical) {
                    return reverse ? rect.bottom : rect.top;
                }

                return window.pageXOffset + (reverse ? rect.right : rect.left);
            }
        }, {
            key: "getSliderLength",
            value: function getSliderLength() {
                var slider = this.sliderRef;

                if (!slider) {
                    return 0;
                }

                var coords = slider.getBoundingClientRect();
                return this.props.vertical ? coords.height : coords.width;
            }
        }, {
            key: "addDocumentTouchEvents",
            value: function addDocumentTouchEvents() {
                // just work for Chrome iOS Safari and Android Browser
                this.onTouchMoveListener = addEventListener(this.document, 'touchmove', this.onTouchMove);
                this.onTouchUpListener = addEventListener(this.document, 'touchend', this.onEnd);
            }
        }, {
            key: "addDocumentMouseEvents",
            value: function addDocumentMouseEvents() {
                this.onMouseMoveListener = addEventListener(this.document, 'mousemove', this.onMouseMove);
                this.onMouseUpListener = addEventListener(this.document, 'mouseup', this.onEnd);
            }
        }, {
            key: "removeDocumentEvents",
            value: function removeDocumentEvents() {
                /* eslint-disable @typescript-eslint/no-unused-expressions */
                this.onTouchMoveListener && this.onTouchMoveListener.remove();
                this.onTouchUpListener && this.onTouchUpListener.remove();
                this.onMouseMoveListener && this.onMouseMoveListener.remove();
                this.onMouseUpListener && this.onMouseUpListener.remove();
                /* eslint-enable no-unused-expressions */
            }
        }, {
            key: "focus",
            value: function focus() {
                var _this$handlesRefs$;

                if (this.props.disabled) {
                    return;
                }

                (_this$handlesRefs$ = this.handlesRefs[0]) === null || _this$handlesRefs$ === void 0 ? void 0 : _this$handlesRefs$.focus();
            }
        }, {
            key: "blur",
            value: function blur() {
                var _this2 = this;

                if (this.props.disabled) {
                    return;
                }

                Object.keys(this.handlesRefs).forEach(function(key) {
                    var _this2$handlesRefs$ke, _this2$handlesRefs$ke2;

                    (_this2$handlesRefs$ke = _this2.handlesRefs[key]) === null || _this2$handlesRefs$ke === void 0 ? void 0 : (_this2$handlesRefs$ke2 = _this2$handlesRefs$ke.blur) === null || _this2$handlesRefs$ke2 === void 0 ? void 0 : _this2$handlesRefs$ke2.call(_this2$handlesRefs$ke);
                });
            }
        }, {
            key: "calcValue",
            value: function calcValue(offset) {
                var _this$props5 = this.props,
                    vertical = _this$props5.vertical,
                    min = _this$props5.min,
                    max = _this$props5.max;
                var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
                var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
                return value;
            }
        }, {
            key: "calcValueByPos",
            value: function calcValueByPos(position) {
                var sign = this.props.reverse ? -1 : +1;
                var pixelOffset = sign * (position - this.getSliderStart());
                var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
                return nextValue;
            }
        }, {
            key: "calcOffset",
            value: function calcOffset(value) {
                var _this$props6 = this.props,
                    min = _this$props6.min,
                    max = _this$props6.max;
                var ratio = (value - min) / (max - min);
                return Math.max(0, ratio * 100);
            }
        }, {
            key: "saveHandle",
            value: function saveHandle(index, handle) {
                this.handlesRefs[index] = handle;
            }
        }, {
            key: "render",
            value: function render() {
                var _classNames;

                var _this$props7 = this.props,
                    prefixCls = _this$props7.prefixCls,
                    className = _this$props7.className,
                    marks = _this$props7.marks,
                    dots = _this$props7.dots,
                    step = _this$props7.step,
                    included = _this$props7.included,
                    disabled = _this$props7.disabled,
                    vertical = _this$props7.vertical,
                    reverse = _this$props7.reverse,
                    min = _this$props7.min,
                    max = _this$props7.max,
                    children = _this$props7.children,
                    maximumTrackStyle = _this$props7.maximumTrackStyle,
                    style = _this$props7.style,
                    railStyle = _this$props7.railStyle,
                    dotStyle = _this$props7.dotStyle,
                    activeDotStyle = _this$props7.activeDotStyle;

                var _get$call = _get(_getPrototypeOf(ComponentEnhancer.prototype), "render", this).call(this),
                    tracks = _get$call.tracks,
                    handles = _get$call.handles;

                var sliderClassName = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), vertical), _defineProperty(_classNames, className, className), _classNames));
                return /*#__PURE__*/ React.createElement("div", {
                    ref: this.saveSlider,
                    className: sliderClassName,
                    onTouchStart: disabled ? noop : this.onTouchStart,
                    onMouseDown: disabled ? noop : this.onMouseDown,
                    onMouseUp: disabled ? noop : this.onMouseUp,
                    onKeyDown: disabled ? noop : this.onKeyDown,
                    onFocus: disabled ? noop : this.onFocus,
                    onBlur: disabled ? noop : this.onBlur,
                    style: style
                }, /*#__PURE__*/ React.createElement("div", {
                    className: "".concat(prefixCls, "-rail"),
                    style: _objectSpread(_objectSpread({}, maximumTrackStyle), railStyle)
                }), tracks, /*#__PURE__*/ React.createElement(Steps, {
                    prefixCls: prefixCls,
                    vertical: vertical,
                    reverse: reverse,
                    marks: marks,
                    dots: dots,
                    step: step,
                    included: included,
                    lowerBound: this.getLowerBound(),
                    upperBound: this.getUpperBound(),
                    max: max,
                    min: min,
                    dotStyle: dotStyle,
                    activeDotStyle: activeDotStyle
                }), handles, /*#__PURE__*/ React.createElement(Marks, {
                    className: "".concat(prefixCls, "-mark"),
                    onClickLabel: disabled ? noop : this.onClickMarkLabel,
                    vertical: vertical,
                    marks: marks,
                    included: included,
                    lowerBound: this.getLowerBound(),
                    upperBound: this.getUpperBound(),
                    max: max,
                    min: min,
                    reverse: reverse
                }), children);
            }
        }]);

        return ComponentEnhancer;
    }(Component), _a.displayName = "ComponentEnhancer(".concat(Component.displayName, ")"), _a.defaultProps = _objectSpread(_objectSpread({}, Component.defaultProps), {}, {
        prefixCls: 'rc-slider',
        className: '',
        min: 0,
        max: 100,
        step: 1,
        marks: {},
        handle: function handle(props) {
            var index = props.index,
                restProps = _objectWithoutProperties(props, ["index"]);

            delete restProps.dragging;

            if (restProps.value === null) {
                return null;
            }

            return /*#__PURE__*/ React.createElement(Handle, _extends({}, restProps, {
                key: index
            }));
        },
        onBeforeChange: noop,
        onChange: noop,
        onAfterChange: noop,
        included: true,
        disabled: false,
        dots: false,
        vertical: false,
        reverse: false,
        trackStyle: [{}],
        handleStyle: [{}],
        railStyle: {},
        dotStyle: {},
        activeDotStyle: {}
    }), _a;
}