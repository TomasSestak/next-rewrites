import {useRouter} from 'next/router';

const About = () => {
	const router = useRouter()
	console.log(router);

	return (
		<div>
			<h1>
				{router.locale}
			</h1>
		</div>
	)
}

export default About;
