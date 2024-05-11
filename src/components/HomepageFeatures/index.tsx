import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Azure Cloud',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Kubernetes',
    Svg: require('@site/static/img/kubernetes.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Docker',
    Svg: require('@site/static/img/docker.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'MaaS',
    Svg: require('@site/static/img/maas.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Terraform/OpenTofu',
    Svg: require('@site/static/img/opentofu.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Pulumi',
    Svg: require('@site/static/img/pulumi.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Ansible',
    Svg: require('@site/static/img/ansible.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'ArgoCD',
    Svg: require('@site/static/img/Argo-CD.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Juju',
    Svg: require('@site/static/img/juju.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Newrelic',
    Svg: require('@site/static/img/newrelic.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Grafana',
    Svg: require('@site/static/img/grafana.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Golang',
    Svg: require('@site/static/img/gopher.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Python',
    Svg: require('@site/static/img/python-logo.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Gitlab',
    Svg: require('@site/static/img/gitlab.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Github',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
      </>
    ),
  },

];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--2 ') + styles.border}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center">
        {/*<Heading as="h5">{title}</Heading>*/}
        <p>{title}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
