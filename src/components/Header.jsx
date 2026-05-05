function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🛒 QuickCart</h1>

        <button className="cart-icon-btn" onClick={onCartClick}>
          🛒
          {cartItemCount > 0 && (
            <span className="cart-badge">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;