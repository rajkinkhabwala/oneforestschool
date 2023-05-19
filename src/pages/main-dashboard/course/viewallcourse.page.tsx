import { Card, Image, Text, Group, createStyles, Center, Button, rem, Title } from '@mantine/core';
import { IconGauge, IconUsers } from '@tabler/icons-react';
import { Grid, Container } from '@mantine/core';
import { useListCourseQuery } from '../../../common/queries/course.queries';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: 'Fall Term', icon: IconUsers },
  { label: 'Prof. Andrew Bond', icon: IconGauge }
];

export function Component() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  const {data, isLoading, isError, error} = useListCourseQuery()

  const rows = data?.map((item: any) => (
    <Grid.Col span={3} key={item.id}>
        <Card withBorder radius="md" className={classes.card} key={item.id}>
        <Card.Section className={classes.imageSection}>
              <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Course Image" />
          </Card.Section>

          <Group position="apart" mt="md">
              <div>
                  <Text fw={500}>{item.name}</Text>
                  <Text fz="xs" c="dimmed">
                      Course Description: {item.description}
                  </Text>
              </div>
              {/* <Badge variant="outline">25% off</Badge> */}
          </Group>

          {/* <Card.Section className={classes.section} mt="md">
              <Text fz="sm" c="dimmed" className={classes.label}>
                  Course Information
              </Text>

              <Group spacing={8} mb={-8}>
                  {features}
              </Group>
          </Card.Section> */}

          <Card.Section className={classes.section}>
              <Group spacing={30}>
                  <div>
                      <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                         {item.credit} credits
                      </Text>
                      <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                          per semester
                      </Text>
                  </div>

                  <Button radius="xl" style={{ flex: 1 }}>
                      Enroll Now
                  </Button>
              </Group>
          </Card.Section>
        </Card>
      </Grid.Col>
  ))

  return (
    <div>
    <Title size={"h2"} style={{ marginBottom: '1rem' }}>Available Courses</Title>
    <Container fluid>
    <Grid>{rows}</Grid>
    </Container>
    </div>
  );
}

Component.displayName = "ViewAllCourse"