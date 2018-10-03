import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import OpenIndexManager from './OpenIndexManager'
import Button from '../Shared/Button.component'
import Content from '../Shared/Content.component'
import Item from '../Shared/Item.component'

export default class RenderPropsAccordion extends React.Component {
	static propTypes = {
		contentClassName: PropTypes.string,
		items: PropTypes.arrayOf(
			PropTypes.shape({ title: PropTypes.string, contents: PropTypes.string }),
		),
		openClassName: PropTypes.string,
		titleClassName: PropTypes.string,
	}

	render() {
		return (
			<OpenIndexManager
				handlerOpenIndex={() => console.log('RenderPropsAccordion handlerOpenIndex')}
				multiSelect
			>
				{({ handleItemClick, openIndexes }) =>
					this.props.items.map((item, index) => (
						<Item key={item.title} direction="horizontal">
							<Button
								className={this.props.titleClassName}
								isOpen={openIndexes.includes(index)}
								onClick={() => handleItemClick(index)}
							>
								{item.title}
							</Button>
							<Content
								className={classNames(
									this.props.contentClassName,
									this.props.openClassName,
								)}
								isOpen={openIndexes.includes(index)}
							>
								{item.contents}
							</Content>
						</Item>
					))
				}
			</OpenIndexManager>
		)
	}
}
