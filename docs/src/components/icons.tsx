type IconProps = React.ComponentPropsWithoutRef<"svg">;

export const Icons = {
	Logo: (props: IconProps) => (
		<svg
			role="img"
			aria-label="Logo"
			width="258"
			height="198"
			viewBox="0 0 258 198"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M165.269 24.0976L188.481 -0.000411987H0V24.0976H165.269Z"
				fill="currentColor"
			/>
			<path
				d="M163.515 95.3516L253.556 2.71059H220.74L145.151 79.7886L163.515 95.3516Z"
				fill="currentColor"
			/>
			<path
				d="M233.192 130.446C233.192 154.103 214.014 173.282 190.357 173.282C171.249 173.282 155.047 160.766 149.534 143.467L146.159 132.876L126.863 152.171L128.626 156.364C138.749 180.449 162.568 197.382 190.357 197.382C227.325 197.382 257.293 167.414 257.293 130.446C257.293 105.965 243.933 84.7676 224.49 73.1186L219.929 70.3856L202.261 88.2806L210.322 92.5356C223.937 99.7236 233.192 114.009 233.192 130.446Z"
				fill="currentColor"
			/>
			<path
				d="M87.797 191.697V44.6736H63.699V191.697H87.797Z"
				fill="currentColor"
			/>
		</svg>
	),
	Sun: (props: IconProps) => (
		<svg
			role="img"
			aria-label="Sun"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<circle cx={12} cy={12} r={4} />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
		</svg>
	),
	Moon: (props: IconProps) => (
		<svg
			role="img"
			aria-label="Moon"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z" />
		</svg>
	),
	Twitter: (props: IconProps) => (
		<svg
			role="img"
			aria-label="Twitter"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	),
	GitHub: (props: IconProps) => (
		<svg
			role="img"
			aria-label="GitHub"
			viewBox="0 0 438.549 438.549"
			{...props}
		>
			<path
				fill="currentColor"
				d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
			/>
		</svg>
	),
	Menu: (props: IconProps) => (
		<svg
			role="img"
			aria-label="Menu"
			fill="none"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<g>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4 6h16"
				/>
			</g>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M4 12h16"
			/>
			<g>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4 18h16"
				/>
			</g>
		</svg>
	),
	Link: (props: IconProps) => (
		<svg
			role="img"
			aria-label="Link"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
			<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
		</svg>
	),
	CheckCheck: (props: IconProps) => (
		<svg
			role="img"
			aria-label="CheckCheck"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M18 6 7 17l-5-5" />
			<path d="m22 10-7.5 7.5L13 16" />
		</svg>
	),
	Copy: (props: IconProps) => (
		<svg
			role="img"
			aria-label="Copy"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
			<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
		</svg>
	),
	Info: (props: IconProps) => (
		<svg
			role="img"
			aria-label="Information circle"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			width="20"
			height="20"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
			/>
		</svg>
	),
	X: (props: IconProps) => (
		<svg
			role="img"
			aria-label="X"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M18 6L6 18M6 6l12 12" />
		</svg>
	),
	Hamburger: (props: IconProps) => (
		<svg
			role="img"
			aria-label="Hamburger"
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M4 12L20 12" />
			<path d="M4 6L20 6" />
			<path d="M4 18L20 18" />
		</svg>
	),
};
