import { Cat } from '@/svgs';
import {
	Box,
	Button,
	ComponentDefaultProps,
	Container,
	Flex,
	Heading,
	Progress,
	Stack,
	Text,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useIdle } from 'react-use';

const StyledTitle = styled.h1`
	color: ${(props: ComponentDefaultProps) => props.theme.colors.tertiary};
	font-weight: bold;
	text-decoration: underline;
	font-size: 3.5rem;
	text-align: center;
`;

export const Home: React.FC = () => {
	const isIdle = useIdle(300);

	return (
		<Container maxW="container.lg">
			<StyledTitle>Welcome to your Next.js Boilerplate</StyledTitle>

			<Flex mt={20} flexWrap="wrap">
				<Box color="blue.200" flex={1}>
					<Cat />
				</Box>

				<Box flex={1}>
					<Stack spacing={2}>
						<Heading textAlign={{ sm: 'center', md: 'left' }}>
							Default heading
						</Heading>
						<Text align={{ sm: 'center', md: 'left' }} fontSize="xl">
							(xl) This is default text!
						</Text>
						<Text align={{ sm: 'center', md: 'left' }} fontSize="lg">
							(lg) This is default text!
						</Text>
						<Text align={{ sm: 'center', md: 'left' }} fontSize="md">
							(md) This is default text!
						</Text>
						<Text align={{ sm: 'center', md: 'left' }} fontSize="sm">
							(sm) This is default text!
						</Text>
						<Text align={{ sm: 'center', md: 'left' }} fontSize="xs">
							(xs) This is default text!
						</Text>
					</Stack>
					<Flex justifyContent={{ sm: 'center', md: 'left' }}>
						<Button mt={10} variant="primary">
							Submit
						</Button>
					</Flex>
				</Box>
			</Flex>

			<Progress value={80} mt={5} />

			<Text align="right" fontSize="xs" my={5} color="gray.500">
				User is idle: {isIdle ? 'Yes 😴' : 'Nope'}
			</Text>
		</Container>
	);
};

export default Home;
