import json
import pandas as pd

# Define synthetic dataset with 5 vendors, each listing a dozen tokens
vendors_data = {
    "Vendor1": ["Bitcoin", "Ethereum", "Ripple", "Litecoin", "Cardano", "Polkadot", "Binance Coin", "Solana", "Chainlink", "Stellar", "Dogecoin", "VeChain"],
    "Vendor2": ["Bitcoin", "Ethereum", "Chainlink", "Uniswap", "Bitcoin Cash", "Tezos", "Aave", "Avalanche", "Cosmos", "Algorand", "Elrond", "Theta"],
    "Vendor3": ["Bitcoin", "Ethereum", "Polkadot", "Cardano", "Solana", "Polygon", "Tron", "Filecoin", "Theta", "Monero", "EOS", "Maker"],
    "Vendor4": ["Bitcoin", "Ethereum", "Ripple", "Litecoin", "Stellar", "Dogecoin", "VeChain", "Cosmos", "Avalanche", "Tezos", "Filecoin", "Chainlink"],
    "Vendor5": ["Bitcoin", "Ethereum", "Stellar", "Dogecoin", "Binance Coin", "VeChain", "Filecoin", "Chainlink", "Polygon", "Uniswap", "Solana", "Algorand"]
}

# Convert to DataFrame for ease of use
vendors_df = pd.DataFrame([
    {"Vendor": vendor, "Token": token}
    for vendor, tokens in vendors_data.items()
    for token in tokens
])

# Save to JSON file as synthetic dataset
dataset_file = "data/crypto_vendors.json"
with open(dataset_file, 'w') as f:
    json.dump(vendors_data, f, indent=4)

