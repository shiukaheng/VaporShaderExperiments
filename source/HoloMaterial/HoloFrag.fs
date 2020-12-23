uniform float global_alpha;

float getAlpha() {
    if (gl_PointCoord.x<=0.625 && gl_PointCoord.x>=0.375) {
        if (gl_PointCoord.y<=0.625 && gl_PointCoord.y>=0.375) {
            return 1.0*global_alpha;
        } else {
            if (gl_PointCoord.y>0.625) {
                return (1.-(gl_PointCoord.y-0.625)/0.375)*0.5*global_alpha;
            } else {
                return ((gl_PointCoord.y)/0.375)*0.5*global_alpha;
            }
        }
    } else {
        return 0.;
    }
    
}

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, getAlpha());
}