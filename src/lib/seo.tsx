import { Helmet } from 'react-helmet-async'

type MetaProps = {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function Meta({ title, description, image = '/images/og-default.jpg', url }: MetaProps) {
  const fullTitle = title ? `${title} | ProFix Handyman` : 'ProFix Handyman'
  return (
    <Helmet>
      {title && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

type LocalBusiness = {
  name: string
  telephone: string
  areaServed: string[]
  url?: string
}

export function LocalBusinessJsonLd(props: LocalBusiness) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: props.name,
    telephone: props.telephone,
    areaServed: props.areaServed,
    url: props.url || (typeof window !== 'undefined' ? window.location.origin : undefined),
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(json)}</script>
    </Helmet>
  )
}
