#version 450
out vec4 FragColor;

in vec3 Normal;
in vec2 UV;
uniform sampler2D _Texture;
uniform float opacity;

void main()
{
	vec4 texColor = texture(_Texture, UV);

	FragColor = vec4(texColor.rgb, texColor.a * opacity);
}