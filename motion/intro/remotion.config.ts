import { Config } from '@remotion/cli/config';
Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(92);
Config.setCodec('h264');
Config.setCrf(18);
Config.setPixelFormat('yuv420p');
// Nền nước dùng WebGL: render bằng ANGLE + SwiftShader để chạy được cả trên máy không có GPU
Config.setChromiumOpenGlRenderer('swangle');
// Dùng Chrome headless có sẵn trên máy nếu đặt REMOTION_BROWSER (vd. môi trường không tải được trình duyệt)
if (process.env.REMOTION_BROWSER) Config.setBrowserExecutable(process.env.REMOTION_BROWSER);
