import Slider from './Slider';
import Range from './Range';
import Handle from './Handle';
import createSliderWithTooltip from './createSliderWithTooltip';
import SliderTooltip from './common/SliderTooltip';
var InternalSlider = Slider;
InternalSlider.Range = Range;
InternalSlider.Handle = Handle;
InternalSlider.createSliderWithTooltip = createSliderWithTooltip;
export default InternalSlider;
export {
    Range,
    Handle,
    createSliderWithTooltip,
    SliderTooltip
};