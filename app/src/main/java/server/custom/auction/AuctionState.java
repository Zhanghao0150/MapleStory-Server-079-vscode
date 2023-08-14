package server.custom.auction;

public enum AuctionState
{
    涓嬫灦(0), 
    涓婃灦(1), 
    宸插敭(2);
    
    private final int state;
    
    private AuctionState(final int state) {
        this.state = state;
    }
    
    public int getState() {
        return this.state;
    }
    
    public static AuctionState getState(final int state) {
        for (final AuctionState as : values()) {
            if (as.state == state) {
                return as;
            }
        }
        return null;
    }
}
