package server.custom.auction1;

public enum AuctionState1
{
    涓嬫灦(0), 
    涓婃灦(1), 
    宸插敭(2);
    
    private final int state1;
    
    private AuctionState1(final int state1) {
        this.state1 = state1;
    }
    
    public int getState1() {
        return this.state1;
    }
    
    public static AuctionState1 getState1(final int state1) {
        for (final AuctionState1 as : values()) {
            if (as.state1 == state1) {
                return as;
            }
        }
        return null;
    }
}
