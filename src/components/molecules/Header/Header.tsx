import LocaleSwitcher from "@src/components/atoms/LocaleSwitch/LocaleSwitch";

export interface IHeaderItem {
  title: string,
  route: string
};

interface IHeaderData {
  data: IHeaderItem[];
};

/**
 * @props data: [{ title: string, route}]  
 */
const Header: React.FC<IHeaderData> = ({ data }) => {

  return (
    <header>
      <nav>
        <ul className="flex items-center justify-center">
          {data.map((item) => {
            return (
              <li key={item.route} className="m-4">
                <a href={item.route}>{item.title}</a>
              </li>
            )
          })}
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  )
}

export default Header;