import React from 'react';
import { Dropdown, Link, Navbar, Text, useTheme } from '@nextui-org/react';

import MyStyledButton from '../buttons/button';

import { icons } from '../../assert/icons';

import { Layout } from './Layout';

export const NavbarItem = () => {

  const { isDark } = useTheme();

  const collapseItems = ['About Us', 'Products', 'FAQs', 'Sign In', 'Sign Out'];

  return (
    <Layout>
      <Navbar isBordered={isDark} variant='sticky'>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}
        >
          <Text b color='inherit' hideIn='xs'>
            PsyDTrader
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor='warning'
          hideIn='xs'
          variant='highlight'
        >
          <Navbar.Link href='#'>About Us</Navbar.Link>

          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: 'center',
                  svg: { pe: 'none' },
                  w: '0px',
                }}
                iconRight={icons.chevron}
                ripple={false}
              >
                Features
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='   PsyDTrader features'
              css={{
                $$dropdownMenuWidth: '340px',
                $$dropdownItemHeight: '70px',
                '& .nextui-dropdown-item': {
                  py: '$4',
                  // dropdown item left icon
                  svg: {
                    color: '$secondary',
                    mr: '$4',
                  },
                  // dropdown item title
                  '& .nextui-dropdown-item-content': {
                    w: '100%',
                    fontWeight: '$semibold',
                  },
                },
              }}
            >
              <Dropdown.Item
                key='autoscaling'
                showFullDescription
                description='   PsyDTrader scales apps to meet user demand, automagically, based on load.'
                icon={icons.scale}
              >
                Trading Jornal
              </Dropdown.Item>
              <Dropdown.Item
                key='usage_metrics'
                showFullDescription
                description='Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.'
                icon={icons.activity}
              >
                Price Alert
              </Dropdown.Item>
              <Dropdown.Item
                key='production_ready'
                showFullDescription
                description='   PsyDTrader runs on ACME, join us and others serving requests at web scale.'
                icon={icons.flash}
              >
                Traders Tool
              </Dropdown.Item>
              <Dropdown.Item
                key='99_uptime'
                showFullDescription
                description='Applications stay on the grid with high availability and high uptime guarantees.'
                icon={icons.server}
              >
                +99% Uptime
              </Dropdown.Item>
              <Dropdown.Item
                key='supreme_support'
                showFullDescription
                description='Overcome any challenge with a supporting team ready to respond.'
                icon={icons.user}
              >
                +Account Reporting
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link href='#'>Pricing</Navbar.Link>
          <Navbar.Link href='#'> FAQs </Navbar.Link>
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item,) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color='inherit'
                css={{
                  minWidth: '100%',
                }}
                href='/'
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
        <Navbar.Content
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end',
            },
          }}
        >
          <Navbar.Item>
            <MyStyledButton
             className=' bg-[#B89F1B]' auto size='mysize'>
              Sign In
            </MyStyledButton>
          </Navbar.Item>

          <Navbar.Item>
            <MyStyledButton className=' bg-[#B89F1B]' auto size='mysize'>
              Sign Up
            </MyStyledButton>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
