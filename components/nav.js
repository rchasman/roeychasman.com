import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: 'https://github.com/rchasman', label: 'GitHub' }
]

export default () => (
  <nav className="tc mv4">
    <ul className='flex justify-around ph3'>
      {links.map(({ key, href, label }) => (
        <li className='flex pv1 ph2' key={`nav-link-${href}-${label}`}>
          <a className='blue f6 no-underline' href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)
